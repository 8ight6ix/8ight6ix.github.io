import { all, fork } from 'redux-saga/effects';
import networkSaga from 'modules/store/saga/network';

function* rootSaga() {
  yield all([fork(networkSaga)]);
}

export default rootSaga;
