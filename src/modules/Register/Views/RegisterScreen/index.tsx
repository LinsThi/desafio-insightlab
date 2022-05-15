import React from 'react';
import { FormRegister } from '~/modules/Register/components/FormRegister';

import * as Sty from './styles';

export function RegisterScreen() {
  return (
    <Sty.Container>
      <FormRegister />
    </Sty.Container>
  );
}
