import { action } from 'typesafe-actions';
import { VaccinatedCitizens } from '~/shared/dtos/VaccinatedCitizens';
import {
  GetCitizensProps,
  SetCitizensProps,
  SetFilterProps,
  CitizensVacinnedTypes,
} from './types';

export const setCitizensVacinnedAction = (
  vaccinesArray: VaccinatedCitizens[],
): SetCitizensProps =>
  action(CitizensVacinnedTypes.SET_CITIZENS_VACINNED, {
    vaccinesArray,
  });

export const getCitizensVacinnedAction = (): GetCitizensProps =>
  action(CitizensVacinnedTypes.GET_CITIZENS_VACINNED);

export const setFilterVacinnesAction = (filter: string): SetFilterProps =>
  action(CitizensVacinnedTypes.SET_FILTER_CITIZENS, { filter });
