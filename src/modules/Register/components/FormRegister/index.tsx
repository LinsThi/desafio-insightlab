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
  name: string;
  number: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup.string().required('Nome necessário'),
  number: yup.string().required('Número necessário'),
  email: yup
    .string()
    .email('Este e-mail não é valido')
    .required('E-mail necessário'),
  password: yup
    .string()
    .required('Senha necessária')
    .min(6, 'Minimo 6 digitos'),
});

export function FormRegister() {
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
    navigation.navigate('Login' as never);
  }, []);

  return (
    <Sty.Container resizeMode="cover">
      <Sty.ContainerImg>
        <Sty.Image source={loginImage} resizeMode="contain" />
      </Sty.ContainerImg>

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
            name="number"
            control={control}
            error={errors.number}
            label="Número de telefone"
            placeholder="(XX) 00000-0000"
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
    </Sty.Container>
  );
}
