import { createReducer } from 'typesafe-actions';
import { Record } from 'immutable';

import { action, Action } from 'modules/store/action/error';

export interface ErrorState {
  isError: boolean;
  id: number;
  title: string;
  message: string;
}

export const createInitialState = Record<ErrorState>({
  isError: false,
  id: NaN,
  title: '',
  message: '',
});

const reducre = createReducer<Record<ErrorState>, Action>(createInitialState())
  .handleAction(action.occur, (state, { payload }) => {
    return state
      .set('isError', true)
      .set('id', payload.id)
      .set('title', payload.title)
      .set('message', payload.message);
  })
  .handleAction(action.release, () => {
    return createInitialState();
  });

export default reducre;
