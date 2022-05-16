import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import loginImage from '~/shared/assets/loginImage.png';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import Toast from 'react-native-toast-message';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { userLoginAction } from '~/shared/store/ducks/user/actions';
import { validationSchema } from './validation';
import { REGISTER_SCREEN } from '~/shared/constants/routes';
import { loginUser } from '~/shared/services/user';
import { useTheme } from 'styled-components/native';

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
  const theme = useTheme();

  const handleUserSubmit = useCallback(async (data: FormData) => {
    setLoading(true);

    const { email, password } = data;

    const response = await loginUser({
      email,
      password,
    });

    setLoading(false);

    if (Object.keys(response).length > 0) {
      const { user, token } = response;
      dispatch(userLoginAction(user.name, token));
    }
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
          color={theme.Colors.PRIMARY_BUTTON}
          textColor={theme.Colors.SECONDARY_BUTTON}
          onPress={handleSubmit(handleUserSubmit)}
          loading={loading}
        />

        <Button
          text="Cadastrar"
          color={theme.Colors.SECONDARY_BUTTON}
          textColor={theme.Colors.PRIMARY_BUTTON}
          onPress={() => navigation.navigate(REGISTER_SCREEN as never)}
        />
      </Sty.ContainerButtons>

      <Toast />
    </Sty.Container>
  );
}
