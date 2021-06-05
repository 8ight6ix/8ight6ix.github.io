import { createAction, ActionType } from 'typesafe-actions';
import { CustomErrorData } from 'constant/error';

export const type = {
  OCCUR: 'error/OCCUR',
  RELEASE: 'error/release',
};

export const action = {
  occur: createAction(type.OCCUR)<CustomErrorData>(),
  release: createAction(type.RELEASE)(),
};

export type Occur = ActionType<typeof action.occur>;
export type Release = ActionType<typeof action.release>;

export type Action = ActionType<typeof action>;
