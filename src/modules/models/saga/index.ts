import { all, fork } from 'redux-saga/effects';
import networkSaga from 'modules/models/saga/network';

function* rootSaga() {
  yield all([fork(networkSaga)]);
}

export default rootSaga;
