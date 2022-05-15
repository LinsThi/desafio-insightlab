import React, { useEffect, useState } from 'react';
import api from '~/shared/services/api';
import { FlatList } from '../../components/FlatList';
import { FloatButton } from '../../components/FloatButton';
import { Header } from '../../components/Header';

import { GET_VACCINATED_CITIZENS } from '~/shared/constants/api';

import * as Sty from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AplciationState } from '~/shared/@types/Entity/AplicationState';
import { VaccinatedCitizens } from '~/shared/dtos/VaccinatedCitizens';
import { filterArrayVacinne } from '../../utils';
import { setCitizensVacinnedAction } from '~/shared/store/ducks/citizensVacinned/actions';

export function HomeScreen() {
  const [arrayFiltred, setArrayFiltred] = useState<VaccinatedCitizens[]>([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { token } = useSelector((state: AplciationState) => state.user);
  const { filterArray, vaccinesArray } = useSelector(
    (state: AplciationState) => state.citizensVacinned,
  );

  useEffect(() => {
    setLoading(true);

    api
      .get(GET_VACCINATED_CITIZENS, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        dispatch(setCitizensVacinnedAction(response.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filterArray) {
      let arrayFiltred: VaccinatedCitizens[];
      arrayFiltred = filterArrayVacinne(vaccinesArray, filterArray);

      setArrayFiltred(arrayFiltred);
    }
  }, [filterArray]);

  return (
    <Sty.Container>
      <Header />

      <FlatList
        vaccinesArray={filterArray ? arrayFiltred : vaccinesArray}
        loading={loading}
      />

      <FloatButton />
    </Sty.Container>
  );
}
