import { VaccinatedCitizens } from '~/shared/dtos/VaccinatedCitizens';

export function filterArrayVacinne(
  array: VaccinatedCitizens[],
  filter: string,
) {
  const arrayFiltred = array.filter(citizen => citizen.vaccineDose === filter);

  return arrayFiltred;
}
