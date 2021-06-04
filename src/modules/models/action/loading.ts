import { createAction, ActionType } from 'typesafe-actions';
import { CustomLoadingData } from 'constant/loading';

export const type = {
  OCCUR: 'loading/OCCUR',
  RELEASE: 'loading/RELEASE',
};

export const action = {
  occur: createAction(type.OCCUR)<CustomLoadingData>(),
  release: createAction(type.RELEASE)(),
};

export type Occur = ActionType<typeof action.occur>;
export type Release = ActionType<typeof action.release>;

export type Action = ActionType<typeof action>;
