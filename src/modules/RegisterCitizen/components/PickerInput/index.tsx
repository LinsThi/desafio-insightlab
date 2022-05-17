import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import * as Sty from './styles';
import { vaccinesName } from './mock';
import { useTheme } from 'styled-components/native';

export type PickerInputProps = PickerProps & {
  label: string;
};

export function PickerInput({
  label,
  selectedValue,
  onValueChange,
}: PickerInputProps) {
  const theme = useTheme();

  return (
    <Sty.Container>
      <Sty.LabelInput>{label}</Sty.LabelInput>

      <Sty.ContainerPicker>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          dropdownIconColor={theme.Colors.DROPDOWN_PICKER_ICON}
        >
          <Picker.Item
            label="Escolha o tipo de vacina"
            value="0"
            enabled={false}
            color={theme.Colors.ITEM_PICKER_DISABLED}
          />

          {vaccinesName.map(vacine => {
            return (
              <Picker.Item
                label={vacine.label}
                value={vacine.value}
                key={vacine.id}
              />
            );
          })}
        </Picker>
      </Sty.ContainerPicker>
    </Sty.Container>
  );
}
