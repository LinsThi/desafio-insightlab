import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { PickerInput, PickerInputProps } from '../PickerInput';

import * as Sty from './styles';

type ControlledProps = PickerInputProps & {
  control: Control<any>;
  name: string;
  error?: any;
};

export function ControlledPicker({
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
          <PickerInput
            onValueChange={onChange}
            selectedValue={value}
            {...rest}
          />
        )}
      />

      {error && <Sty.ErrorText>{error.message}</Sty.ErrorText>}
    </>
  );
}
