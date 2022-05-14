import React from 'react';

import * as Sty from './styles';
import { Popable } from 'react-native-popable';

export function Header() {
  return (
    <Sty.Container>
      <Sty.ContainerUser>
        <Sty.IconHeader name="user-circle-o" type="font" />

        <Sty.TextUser>Bem-vindo, FULANO!</Sty.TextUser>
      </Sty.ContainerUser>

      <Sty.Button>
        <Popable
          content={
            <Sty.ContainerPopable>
              <Sty.TextPopable>Sair</Sty.TextPopable>
            </Sty.ContainerPopable>
          }
          position="bottom"
          style={{ top: 3, left: -3, width: 50 }}
        >
          <Sty.IconHeader name="logout" type="material" />
        </Popable>
      </Sty.Button>
    </Sty.Container>
  );
}
