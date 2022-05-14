import React, { useCallback } from 'react';
import { vaccinesArray } from './mock';

import * as Sty from './styles';

export function FlatList() {
  const renderItem = useCallback(({ item }) => {
    return (
      <Sty.ContainerItem>
        <Sty.ContainerInfoCitizen>
          <Sty.NameCitizen>{item.name}</Sty.NameCitizen>

          <Sty.InformationCitizenCPF>CPF: {item.cpf}</Sty.InformationCitizenCPF>
          <Sty.InformationCitizenBirthday>
            Data de nascimento: {item.birthDay}
          </Sty.InformationCitizenBirthday>
        </Sty.ContainerInfoCitizen>

        <Sty.ContainerVacinne>
          <Sty.VacinneImage />

          <Sty.InformationCitizenDose>
            Dose {item.dose}
          </Sty.InformationCitizenDose>
        </Sty.ContainerVacinne>
      </Sty.ContainerItem>
    );
  }, []);

  return (
    <Sty.Container>
      <Sty.FlatList
        data={vaccinesArray}
        extraData={vaccinesArray}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Sty.Container>
  );
}
