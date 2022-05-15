import { combineReducers } from 'redux';

import user from './user';
import citizensVacinned from './citizensVacinned';

export default combineReducers({ user, citizensVacinned });
