import { createReducer } from 'typesafe-actions';
import { List, Record } from 'immutable';
import moment from 'moment-timezone';

import { CONFIG } from 'constant';
import { action, Action } from 'modules/models/action/artwork';
import { ArtworkData } from 'modules/api-handler/artwork';
import { fromArtworkData } from 'modules/util/date';

export interface Artwrok {
  name: string;
  creator: string;
  date: moment.Moment;
  type: string;
  keyword: List<string>;
  description: string;
  path: string;
}

const createArtwork = Record<Artwrok>({
  name: CONFIG.artworkDefaultTitle,
  creator: CONFIG.artworkDefaultDescription,
  date: fromArtworkData(CONFIG.artworkDefaultDate),
  type: CONFIG.artworkDefaultType,
  keyword: List(),
  description: CONFIG.artworkDefaultDescription,
  path: CONFIG.artworkDefaultPath,
});

type stateType = List<Record<Artwrok>>;
const createInitialState = (artworks: Record<Artwrok>[] = []) => {
  return List(artworks);
};

const convertDataToArtwork = (data: ArtworkData) => {
  const date = fromArtworkData(data.date);
  const keyword = List(data.keyword);
  return createArtwork({ ...data, date, keyword });
};

const reducer = createReducer<stateType, Action>(createInitialState())
  .handleAction(action.initializeSuccess, (_, { payload }) => {
    const list = payload.map(convertDataToArtwork);
    return createInitialState(list);
  })
  .handleAction(action.initializeFailure, () => {
    return createInitialState();
  })
  .handleAction(action.insert, (state, { payload }) => {
    const artwork = convertDataToArtwork(payload);
    return state.push(artwork);
  })
  .handleAction(action.delete, (state, { payload }) => {
    if (payload < 0 || payload >= state.size) return state;
    return state.splice(payload, 1);
  });

export default reducer;
