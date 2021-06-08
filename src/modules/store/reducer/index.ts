import { combineReducers } from 'redux';

import artkworkReducer from 'modules/store/reducer/artwork';

const rootReducer = combineReducers({ artkworkReducer });

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
