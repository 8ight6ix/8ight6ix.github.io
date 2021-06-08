import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootReducer } from 'modules/store/reducer';
import { action as artworkAction } from 'modules/store/action/artwork';
import { ArtworkJS } from 'modules/store/model/artwork';

function useArtwork() {
  const state = useSelector((root: RootReducer) => root.artkworkReducer);
  const dispatch = useDispatch();

  const items = useMemo(() => state.get('items'), [state]);

  // 아이템들을 자바스크립트 객체로 변환해서 반환합니다.
  const getItems = useCallback((): ArtworkJS[] => items.toJS(), [items]);

  // 인덱스에 해달하는 아이템을 자바스크립트 객체로 변환하여 반환합니다.
  const getItemFromIndex = useCallback(
    (index): ArtworkJS | undefined => items.get(index)?.toJS(),
    [items],
  );

  // Artwrk 리덕스 모델을 초기화합니다.
  const initialize = useCallback(() => {
    dispatch(artworkAction.initialize());
  }, []);

  return {
    getItems,
    getItemFromIndex,
    initialize,
  };
}

export default useArtwork;
