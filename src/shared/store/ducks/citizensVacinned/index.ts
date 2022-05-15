import type { Reducer } from 'redux';
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
    default:
      return state;
  }
};

export default reducer;
