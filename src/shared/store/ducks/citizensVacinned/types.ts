import type { Action } from 'typesafe-actions';
import { VaccinatedCitizens } from '~/shared/dtos/VaccinatedCitizens';

export enum CitizensVacinnedTypes {
  SET_CITIZENS_VACINNED = '@citizens/SET_CITIZENS_VACINNED',
  GET_CITIZENS_VACINNED = '@citizens/GET_CITIZENS_VACINNED',
  SET_FILTER_CITIZENS = '@citizens/SET_FILTER_CITIZENS',
}

export interface CitizensVacinnedState {
  vaccinesArray: VaccinatedCitizens[];
  filterArray: string;
}

export interface SetCitizensProps extends Action {
  type: CitizensVacinnedTypes.SET_CITIZENS_VACINNED;
  payload: { vaccinesArray: VaccinatedCitizens[] };
}

export interface GetCitizensProps extends Action {
  type: CitizensVacinnedTypes.GET_CITIZENS_VACINNED;
}

export interface SetFilterProps extends Action {
  type: CitizensVacinnedTypes.SET_FILTER_CITIZENS;
  payload: { filter: string };
}
