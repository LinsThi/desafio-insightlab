import { useNavigation } from '@react-navigation/native';
import React from 'react';

import * as Sty from './styles';

export function FloatButton() {
  const navigation = useNavigation();

  return (
    <Sty.Container onPress={() => navigation.navigate('RegisterCitizen')}>
      <Sty.IconButton name="plus" type="antDesign" />
    </Sty.Container>
  );
}
