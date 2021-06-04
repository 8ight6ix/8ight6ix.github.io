import { createReducer } from 'typesafe-actions';
import { Record } from 'immutable';

import { action, Action } from 'modules/models/action/loading';

export interface LoadingState {
  isLoading: boolean;
  id: number;
  message: string;
}

const createInitialState = Record<LoadingState>({
  isLoading: false,
  id: NaN,
  message: '',
});

const reducer = createReducer<Record<LoadingState>, Action>(
  createInitialState(),
)
  .handleAction(action.occur, (state, { payload }) => {
    return state
      .set('isLoading', true)
      .set('id', payload.id)
      .set('message', payload.message);
  })
  .handleAction(action.release, () => {
    return createInitialState();
  });

export default reducer;
