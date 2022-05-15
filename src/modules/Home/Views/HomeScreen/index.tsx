import React, { useEffect, useState } from 'react';
import api from '~/shared/services/api';
import { FlatList } from '../../components/FlatList';
import { FloatButton } from '../../components/FloatButton';
import { Header } from '../../components/Header';

import { GET_VACCINATED_CITIZENS } from '~/shared/constants/api';

import * as Sty from './styles';
import { useSelector } from 'react-redux';
import { AplciationState } from '~/shared/@types/Entity/AplicationState';
import { VaccinatedCitizens } from '~/shared/dtos/VaccinatedCitizens';

export function HomeScreen() {
  const [array, setArray] = useState<VaccinatedCitizens[]>([]);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state: AplciationState) => state.user);

  useEffect(() => {
    setLoading(true);

    api
      .get(GET_VACCINATED_CITIZENS, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setArray(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Sty.Container>
      <Header />

      <FlatList vaccinesArray={array} loading={loading} />

      <FloatButton />
    </Sty.Container>
  );
}
