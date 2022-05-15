import React, { useState } from 'react';

import * as Sty from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AplciationState } from '~/shared/@types/Entity/AplicationState';
import { userLoggoutAction } from '~/shared/store/ducks/user/actions';
import MenuFilter from '../MenuFilter';
import { Popable } from 'react-native-popable';

export function Header() {
  const { name } = useSelector((state: AplciationState) => state.user);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <Sty.Container>
      <Sty.ContainerUser>
        <Sty.IconHeader name="user-circle-o" type="font" />

        <Sty.TextUser>Bem-vindo, {name}!</Sty.TextUser>
      </Sty.ContainerUser>

      <Sty.ContainerButtons>
        <Sty.ButtonFilter>
          <Sty.PopableView
            content={
              <Sty.ContainerPopable onPress={() => setVisible(prev => !prev)}>
                <Sty.TextPopable>Filtrar</Sty.TextPopable>
              </Sty.ContainerPopable>
            }
          >
            <MenuFilter visible={visible} setVisible={setVisible} />
          </Sty.PopableView>
        </Sty.ButtonFilter>

        <Sty.Button>
          <Sty.PopableView
            content={
              <Sty.ContainerPopable
                onPress={() => dispatch(userLoggoutAction())}
              >
                <Sty.TextPopable>Sair</Sty.TextPopable>
              </Sty.ContainerPopable>
            }
          >
            <Sty.IconHeader name="logout" type="material" />
          </Sty.PopableView>
        </Sty.Button>
      </Sty.ContainerButtons>
    </Sty.Container>
  );
}
