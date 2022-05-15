import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import loginImage from '~/shared/assets/loginImage.png';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import Toast from 'react-native-toast-message';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '~/shared/services/api';

import { LOGIN } from '~/shared/constants/api';
import { useDispatch } from 'react-redux';
import { userLoginAction } from '~/shared/store/ducks/user/actions';
import { ToastNotification } from '~/shared/components/ToastNotification';
import { validationSchema } from './validation';
import { REGISTER_SCREEN } from '~/shared/constants/routes';

type FormData = {
  email: string;
  password: string;
};

export function Form() {
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
  const dispatch = useDispatch();

  const handleUserSubmit = useCallback((data: FormData) => {
    setLoading(true);
    api
      .post(LOGIN, {
        email: data.email,
        password: data.password,
      })
      .then(response => {
        const { user, token } = response.data;

        dispatch(userLoginAction(user.name, token));
      })
      .catch(error => {
        ToastNotification({
          type: 'error',
          title: 'Ops, ocorreu um erro:',
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

      <Sty.ContainerInputs>
        <ControlledInput
          name="email"
          control={control}
          error={errors.email}
          label="E-mail"
          autoCapitalize="none"
          iconLeftName="info"
          iconLeftType="feather"
          placeholder="meu-email@gmail.com"
          border
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
          border
        />
      </Sty.ContainerInputs>

      <Sty.ContainerButtons>
        <Button
          text="Entrar"
          color="#1B2735"
          textColor="#FFFFFF"
          onPress={handleSubmit(handleUserSubmit)}
          loading={loading}
        />

        <Button
          text="Cadastrar"
          color="#fff"
          textColor="#1B2735"
          onPress={() => navigation.navigate(REGISTER_SCREEN as never)}
        />
      </Sty.ContainerButtons>

      <Toast />
    </Sty.Container>
  );
}
