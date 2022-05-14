import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';
import { ControlledPicker } from '../ControlledPicker';
import { VaccinesProps } from '../PickerInput/mock';

type FormData = {
  name: string;
  cpf: string;
  birthDay: string;
  vacinne: VaccinesProps;
  dose: number;
};

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  cpf: yup.string().required('CPF obrigatório').min(14, 'CPF Inválido'),
  birthDay: yup
    .string()
    .required('Data de aniversário necessário')
    .min(8, 'Data Inválida'),
  vacinne: yup.string().required('Vacina obrigatória'),
  dose: yup
    .string()
    .required('Dose necessária')
    .oneOf(['1', '2'], 'Dose errada'),
});

export function FormRegisterCitizen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const handleUserSubmit = useCallback((data: FormData) => {
    navigation.navigate('Home' as never);
  }, []);

  return (
    <Sty.Container resizeMode="cover">
      <Sty.ContainerForm showsVerticalScrollIndicator={false}>
        <Sty.ContainerInputs>
          <ControlledInput
            name="name"
            control={control}
            error={errors.name}
            label="Nome completo"
            placeholder="Digite o nome completo"
          />

          <ControlledInput
            name="cpf"
            control={control}
            error={errors.cpf}
            label="CPF"
            placeholder="000.000.000-00"
            keyboardType="numeric"
            maxLength={14}
            mask="CPF"
          />

          <ControlledInput
            name="birthDay"
            control={control}
            error={errors.birthDay}
            label="Data de Nascimento"
            keyboardType="numeric"
            placeholder="00/00/00"
            maxLength={8}
            mask="birthDay"
          />

          <ControlledPicker
            name="vacinne"
            control={control}
            error={errors.vacinne}
            label="Tipo de vacina"
          />

          <ControlledInput
            name="dose"
            control={control}
            error={errors.dose}
            label="Dose de vacina"
            keyboardType="numeric"
            placeholder="Primeira ou segunda dose"
            maxLength={1}
          />
        </Sty.ContainerInputs>

        <Sty.ContainerButtons>
          <Button
            text="Cadastrar Cidadão"
            color="#1B2735"
            textColor="#FFFFFF"
            onPress={handleSubmit(handleUserSubmit)}
            style={{ marginTop: 0 }}
          />
        </Sty.ContainerButtons>
      </Sty.ContainerForm>
    </Sty.Container>
  );
}
