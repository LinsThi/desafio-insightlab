import React, { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { format } from 'date-fns';

import * as Sty from './styles';

type FlatListProps = {
  vaccinesArray: [];
  loading: boolean;
};

export function FlatList({ vaccinesArray, loading }: FlatListProps) {
  const renderItem = useCallback(({ item }) => {
    const dateFormated = format(new Date(item.birthDate), 'dd/LL/y');

    return (
      <Sty.ContainerItem>
        <Sty.ContainerInfoCitizen>
          <Sty.NameCitizen>{item.name}</Sty.NameCitizen>

          <Sty.InformationCitizenCPF>CPF: {item.cpf}</Sty.InformationCitizenCPF>
          <Sty.InformationCitizenBirthday>
            Data de nascimento: {dateFormated}
          </Sty.InformationCitizenBirthday>
        </Sty.ContainerInfoCitizen>

        <Sty.ContainerVacinne>
          <Sty.VacinneImage />

          <Sty.InformationCitizenDose>
            Dose {item.vaccineDose}
          </Sty.InformationCitizenDose>
        </Sty.ContainerVacinne>
      </Sty.ContainerItem>
    );
  }, []);

  return (
    <Sty.Container>
      {loading ? (
        <ActivityIndicator color="#dffe3a" size="large" />
      ) : (
        <Sty.FlatList
          data={vaccinesArray}
          extraData={vaccinesArray}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </Sty.Container>
  );
}
