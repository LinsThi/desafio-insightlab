import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import loginImage from '~/shared/assets/loginImage.png';
import { Button } from '~/shared/components/Button';
import { ControlledInput } from '~/shared/components/ControlledInput';

import * as Sty from './styles';
import { useNavigation } from '@react-navigation/native';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Este e-mail não é valido')
    .required('E-mail necessário'),
  password: yup
    .string()
    .required('Senha necessária')
    .min(6, 'Minimo 6 digitos'),
});

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const handleUserSubmit = useCallback((data: FormData) => {
    console.log(data);
    // navigation.navigate('Home' as never);
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
        />

        <Button
          text="Cadastrar"
          color="#fff"
          textColor="#1B2735"
          onPress={() => navigation.navigate('Register' as never)}
        />
      </Sty.ContainerButtons>
    </Sty.Container>
  );
}
