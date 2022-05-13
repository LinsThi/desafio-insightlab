import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input';

import * as Sty from './styles';

type ControlledProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export function ControlledInput({
  control,
  name,
  error,
  ...rest
}: ControlledProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />

      {error && <Sty.ErrorText>{error.message}</Sty.ErrorText>}
    </>
  );
}
