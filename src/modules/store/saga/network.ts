import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CONFIG, LOADING, ERROR } from 'constant';
import { getDataList } from 'modules/api-handler/artwork';
import ArtworkData from 'modules/api-handler/model/artwork-data';

import * as loadingAction from 'modules/store/action/loading';
import * as errorAction from 'modules/store/action/error';
import * as artworkAction from 'modules/store/action/artwork';

/**
 * @description 작품 정보 리스트를 가져옵니다.
 */
function* callGetArtworkList$() {
  yield put(loadingAction.action.occur(LOADING.getWorkList));

  try {
    const res: ArtworkData[] = yield call(getDataList);
    yield put(artworkAction.action.initializeSuccess(res));
  } catch (e) {
    // eslint-disable-next-line no-console
    if (CONFIG.mode === 'development') console.error(e);

    yield put(errorAction.action.occur(ERROR.getWorkList));
    yield put(artworkAction.action.initializeFailure(null));
  }

  yield put(loadingAction.action.release());
}

function* networkSaga() {
  yield all([takeLatest(artworkAction.type.INITIALIZE, callGetArtworkList$)]);
}

export default networkSaga;
