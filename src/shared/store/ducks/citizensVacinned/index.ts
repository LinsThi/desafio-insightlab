import type { Reducer } from 'redux';
import { UserTypes } from '../user/types';
import { CitizensVacinnedState, CitizensVacinnedTypes } from './types';

const INITIAL_STATE: CitizensVacinnedState = {
  vaccinesArray: [],
  filterArray: '',
};

const reducer: Reducer<CitizensVacinnedState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CitizensVacinnedTypes.SET_CITIZENS_VACINNED:
      return {
        ...state,
        vaccinesArray: payload.vaccinesArray,
      };
    case CitizensVacinnedTypes.GET_CITIZENS_VACINNED:
      return {
        ...state,
      };
    case CitizensVacinnedTypes.SET_FILTER_CITIZENS:
      return {
        ...state,
        filterArray: payload.filter,
      };
    case UserTypes.USER_LOGGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
