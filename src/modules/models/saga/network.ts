import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CONFIG, LOADING, ERROR } from 'constant';
import { getArtworkList, ArtworkData } from 'modules/api-handler/artwork';
import * as loading from 'modules/models/action/loading';
import * as error from 'modules/models/action/error';
import * as artwork from 'modules/models/action/artwork';

/**
 * @description 작품 정보 리스트를 가져옵니다.
 */
function* callGetArtworkList$() {
  yield put(loading.action.occur(LOADING.getWorkList));

  try {
    const res: ArtworkData[] = yield call(getArtworkList);
    yield put(artwork.action.initializeSuccess(res));
  } catch (e) {
    // eslint-disable-next-line no-console
    if (CONFIG.mode === 'development') console.error(e);

    yield put(error.action.occur(ERROR.getWorkList));
    yield put(artwork.action.initializeFailure(null));
  }

  yield put(loading.action.release());
}

function* networkSaga() {
  yield all([takeLatest(artwork.type.INITIALIZE, callGetArtworkList$)]);
}

export default networkSaga;
