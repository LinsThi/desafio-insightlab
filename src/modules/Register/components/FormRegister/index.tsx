import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Toast from 'react-native-toast-message';

import loginImage from '~/shared/assets/loginImage.png';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';
import { ToastNotification } from '~/shared/components/ToastNotification';
import { validationSchema } from './validation';
import { LOGIN_SCREEN } from '~/shared/constants/routes';
import { registerUser } from '~/shared/services/user';
import { useTheme } from 'styled-components/native';

type FormData = {
  name: string;
  number: string;
  email: string;
  password: string;
};

export function FormRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleUserSubmit = useCallback(async (data: FormData) => {
    setLoading(true);

    const { name, email, password } = data;

    await registerUser({ name, email, password })
      .then(() => {
        ToastNotification({
          type: 'success',
          title: 'Sucesso',
          info: 'Cliente cadastrado',
          navigate: () => navigation.navigate(LOGIN_SCREEN as never),
        });
      })
      .catch(error => {
        ToastNotification({
          type: 'error',
          title: 'ERROR',
          info: error.response.data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Sty.Container resizeMode="cover">
      <Sty.ContainerImg>
        <Sty.Image source={loginImage} resizeMode="contain" />
      </Sty.ContainerImg>

      <Sty.ContainerForm
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
      >
        <Sty.ContainerInputs>
          <ControlledInput
            name="name"
            control={control}
            error={errors.name}
            label="Nome completo"
            placeholder="Digite o nome completo"
          />

          <ControlledInput
            name="number"
            control={control}
            error={errors.number}
            label="Número de telefone"
            placeholder="(XX) 00000-0000"
            keyboardType="numeric"
            maxLength={15}
            mask="phone"
          />

          <ControlledInput
            name="email"
            control={control}
            error={errors.email}
            label="E-mail"
            autoCapitalize="none"
            iconLeftName="info"
            iconLeftType="feather"
            placeholder="meu-email@gmail.com"
            keyboardType="email-address"
          />

          <ControlledInput
            name="password"
            control={control}
            error={errors.password}
            label="Senha"
            iconLeftName={passwordVisible ? 'eye' : 'eye-off'}
            iconLeftType="feather"
            secureTextEntry={!passwordVisible}
            iconLeftAction={() => setPasswordVisible(prev => !prev)}
            placeholder="***********"
          />
        </Sty.ContainerInputs>

        <Sty.ContainerButtons>
          <Button
            text="Concluir"
            color={theme.Colors.PRIMARY_BUTTON}
            textColor={theme.Colors.SECONDARY_BUTTON}
            onPress={handleSubmit(handleUserSubmit)}
            style={{ marginTop: 0 }}
            loading={loading}
          />
        </Sty.ContainerButtons>
      </Sty.ContainerForm>

      <Toast />
    </Sty.Container>
  );
}
