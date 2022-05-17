import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input';

import * as Sty from './styles';
import { verifyMask } from './utils';

type ControlledProps = InputProps & {
  control: Control<any>;
  name: string;
  mask?: 'CPF' | 'birthDay' | 'phone' | '';
  error?: FieldError;
};

export function ControlledInput({
  control,
  name,
  mask = '',
  error,
  ...rest
}: ControlledProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={text => onChange(verifyMask(text, mask))}
            value={value}
            {...rest}
          />
        )}
      />

      {error && <Sty.ErrorText>{error.message}</Sty.ErrorText>}
    </>
  );
}
