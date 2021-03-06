import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';
import { ControlledPicker } from '../ControlledPicker';
import { VaccinesProps } from '../PickerInput/mock';
import api from '~/shared/services/api';
import { REGISTER_VACCINATED_CITIZENS } from '~/shared/constants/api';
import { ToastNotification } from '~/shared/components/ToastNotification';
import { AplciationState } from '~/shared/@types/Entity/AplicationState';
import { useSelector } from 'react-redux';
import { validationSchema } from './validation';
import { HOME_SCREEN } from '~/shared/constants/routes';
import { useTheme } from 'styled-components/native';

type FormData = {
  name: string;
  cpf: string;
  birthDay: string;
  vacinne: VaccinesProps;
  dose: string;
};

export function FormRegisterCitizen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [laoding, setLoading] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const { token } = useSelector((state: AplciationState) => state.user);

  const handleUserSubmit = useCallback((data: FormData) => {
    setLoading(true);
    const [day, month, year] = data.birthDay.split('/');

    const dateFormated = new Date(Number(year), Number(month), Number(day));

    api
      .post(
        REGISTER_VACCINATED_CITIZENS,
        {
          name: data.name,
          cpf: data.cpf,
          birthDate: dateFormated,
          vaccineName: data.vacinne,
          vaccineDose: data.dose,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(() => {
        ToastNotification({
          type: 'success',
          title: 'Sucesso',
          info: 'Cidad??o vacinado cadastrado',
          navigate: () => navigation.navigate(HOME_SCREEN as never),
        });
      })
      .finally(() => {
        setLoading(false);
      });
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
            placeholder="00/00/0000"
            maxLength={10}
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
            text="Cadastrar Cidad??o"
            color={theme.Colors.PRIMARY_BUTTON}
            textColor={theme.Colors.SECONDARY_BUTTON}
            onPress={handleSubmit(handleUserSubmit)}
            style={{ marginTop: 0 }}
            loading={laoding}
          />
        </Sty.ContainerButtons>
      </Sty.ContainerForm>

      <Toast />
    </Sty.Container>
  );
}
