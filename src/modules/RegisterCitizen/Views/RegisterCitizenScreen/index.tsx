import React from 'react';
import { FormRegisterCitizen } from '../../components/FormRegisterCitizen';

import * as Sty from './styles';

export function RegisterCitizenScreen() {
  return (
    <Sty.Container>
      <FormRegisterCitizen />
    </Sty.Container>
  );
}
