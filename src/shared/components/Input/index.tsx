import React from 'react';
import { TextInputProps } from 'react-native';

import * as Sty from './styles';

export type InputProps = {
  label: string;
  border?: boolean;
  iconLeftName?: string;
  iconLeftType?: string;
  iconLeftAction?: () => void;
} & TextInputProps;

export function Input({
  label,
  border = false,
  iconLeftName,
  iconLeftType,
  iconLeftAction,
  ...rest
}: InputProps) {
  return (
    <Sty.Container>
      <Sty.LabelInput>{label}</Sty.LabelInput>

      <Sty.ContainerInput
        border={border}
        style={{
          elevation: 5,
        }}
      >
        <Sty.Input {...rest} />

        <Sty.ButtonIcon onPress={iconLeftAction}>
          <Sty.IconInput name={iconLeftName} type={iconLeftType} />
        </Sty.ButtonIcon>
      </Sty.ContainerInput>
    </Sty.Container>
  );
}
