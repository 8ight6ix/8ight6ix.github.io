import { createAction, ActionType } from 'typesafe-actions';
import { ArtworkData } from 'modules/api-handler/artwork';

export const type = {
  INITIALIZE: 'artwork/INITIALIZE',
  INITIALIZE_SUCCESS: 'artwork/INITIALIZE_SUCCESS',
  INITIALIZE_FAILURE: 'artwork/INITIALIZE_FAILURE',
  INSERT: 'artwork/INSERT',
  DELETE: 'artwork/DELETE',
};

export const action = {
  initialize: createAction(type.INITIALIZE)(),
  initializeSuccess: createAction(type.INITIALIZE_SUCCESS)<ArtworkData[]>(),
  initializeFailure: createAction(type.INITIALIZE_FAILURE)<null>(),
  insert: createAction(type.INSERT)<ArtworkData>(),
  delete: createAction(type.DELETE)<number>(),
};

export type Initialize = ActionType<typeof action.initialize>;
export type InitializeSuccess = ActionType<typeof action.initializeSuccess>;
export type InitializeFailure = ActionType<typeof action.initializeFailure>;
export type Insert = ActionType<typeof action.insert>;
export type Delete = ActionType<typeof action.delete>;

export type Action = ActionType<typeof action>;
