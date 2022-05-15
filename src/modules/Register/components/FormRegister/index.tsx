import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Toast from 'react-native-toast-message';

import loginImage from '~/shared/assets/loginImage.png';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import { REGISTER_API } from '~/shared/constants/api';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '~/shared/services/api';
import { ToastNotification } from '~/shared/components/ToastNotification';
import { validationSchema } from './validation';

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

  const navigation = useNavigation();

  const handleUserSubmit = useCallback((data: FormData) => {
    api
      .post(REGISTER_API, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(() => {
        ToastNotification({
          type: 'success',
          title: 'Sucesso',
          info: 'Cliente cadastrado',
          navigate: () => navigation.navigate('Login' as never),
        });
      })
      .catch(error => {
        ToastNotification({
          type: 'error',
          title: 'ERROR',
          info: error.response.data.message,
        });
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
            maxLength={12}
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
            color="#1B2735"
            textColor="#FFFFFF"
            onPress={handleSubmit(handleUserSubmit)}
            style={{ marginTop: 0 }}
          />
        </Sty.ContainerButtons>
      </Sty.ContainerForm>

      <Toast />
    </Sty.Container>
  );
}
