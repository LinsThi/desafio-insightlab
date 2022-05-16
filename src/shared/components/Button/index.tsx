import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type ButtonProps = {
  color: string;
  text: string;
  textColor: string;
  loading?: boolean;
} & TouchableOpacityProps;

export function Button({
  color,
  text,
  textColor,
  loading = false,
  ...rest
}: ButtonProps) {
  return (
    <Sty.Container color={color} disabled={loading} {...rest}>
      {loading ? (
        <Sty.LoadingIndicator />
      ) : (
        <Sty.NameButton colorText={textColor}>{text}</Sty.NameButton>
      )}
    </Sty.Container>
  );
}
