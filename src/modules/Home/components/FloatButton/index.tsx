import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { REGISTER_CITIZEN_SCREEN } from '~/shared/constants/routes';

import * as Sty from './styles';

export function FloatButton() {
  const navigation = useNavigation();

  return (
    <Sty.Container
      onPress={() => navigation.navigate(REGISTER_CITIZEN_SCREEN as never)}
    >
      <Sty.IconButton name="plus" type="antDesign" />
    </Sty.Container>
  );
}
