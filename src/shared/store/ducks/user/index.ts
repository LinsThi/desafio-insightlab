import type { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  name: '',
  token: '',
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        ...state,
        name: payload.name,
        token: payload.token,
        isLogged: true,
      };
    case UserTypes.USER_LOGGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
