import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type ButtonProps = {
  color: string;
  text: string;
  textColor: string;
} & TouchableOpacityProps;

export function Button({ color, text, textColor, ...rest }: ButtonProps) {
  return (
    <Sty.Container color={color} {...rest}>
      <Sty.NameButton colorText={textColor}>{text}</Sty.NameButton>
    </Sty.Container>
  );
}
