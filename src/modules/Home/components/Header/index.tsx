import React from 'react';

import * as Sty from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AplciationState } from '~/shared/@types/Entity/AplicationState';
import { userLoggoutAction } from '~/shared/store/ducks/user/actions';

export function Header() {
  const { name } = useSelector((state: AplciationState) => state.user);

  const dispatch = useDispatch();

  return (
    <Sty.Container>
      <Sty.ContainerUser>
        <Sty.IconHeader name="user-circle-o" type="font" />

        <Sty.TextUser>Bem-vindo, {name}!</Sty.TextUser>
      </Sty.ContainerUser>

      <Sty.Button onPress={() => dispatch(userLoggoutAction())}>
        <Sty.IconHeader name="logout" type="material" />
      </Sty.Button>
    </Sty.Container>
  );
}
