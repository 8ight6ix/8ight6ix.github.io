/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { CONFIG } from 'constant';
import rootReducer from 'modules/models/reducer';
import rootSaga from 'modules/models/saga';

// Redux Devtool Global Type 설정
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// 개발 환경에서 Redux Devtool을 사용
const composeEnhancer =
  CONFIG.mode === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer').default),
    );
  }

  return store;
}

export default configureStore;
