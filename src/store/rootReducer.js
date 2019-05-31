import { combineReducers } from 'redux';

import { authReducer } from './modules/auth';
import { partyReducer } from './modules/parties';

export default combineReducers({ auth: authReducer, party: partyReducer });
