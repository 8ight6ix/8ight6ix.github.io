import { createReducer } from 'typesafe-actions';
import { List, Record } from 'immutable';

import { action, Action } from 'modules/store/action/artwork';
import ArtworkData from 'modules/api-handler/model/artwork-data';
import Artwork, { ArtworkType } from 'modules/store/model/artwork';
import { fromArtworkData } from 'modules/util/date';
import { makeRandomStr } from 'modules/util/string';

export interface State {
  isLoaded: boolean;
  items: List<ArtworkType>;
}

const createInitialState = Record<State>({
  isLoaded: false,
  items: List<ArtworkType>(),
});

const converData = (data: ArtworkData) =>
  Artwork({
    id: data.id || makeRandomStr(12),
    type: data.type,
    title: data.title,
    date: data.date ? fromArtworkData(data.date) : undefined,
    creator: data.creator,
    description: data.description,
    keyword: Array.isArray(data.keyword) ? List(data.keyword) : undefined,
    path: data.path,
    thumbnail: data.thumbnail,
  });

const reducer = createReducer<Record<State>, Action>(createInitialState())
  .handleAction(action.initializeSuccess, (_, { payload }) => {
    const items = List(payload.map(converData));
    return createInitialState({ isLoaded: true, items });
  })
  .handleAction(action.initializeFailure, () => {
    return createInitialState();
  })
  .handleAction(action.insert, (state, { payload }) => {
    const item = converData(payload);
    const items = state.get('items').push(item);
    return state.set('items', items);
  })
  .handleAction(action.delete, (state, { payload }) => {
    const items = state.get('items').splice(payload, 1);
    return state.set('items', items);
  });

export default reducer;
