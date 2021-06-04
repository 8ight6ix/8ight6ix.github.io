import { combineReducers } from 'redux';

import artkworkReducer from 'modules/models/reducer/artwork';

const rootReducer = combineReducers({ artkworkReducer });

export default rootReducer;
export type rootReducer = ReturnType<typeof rootReducer>;
