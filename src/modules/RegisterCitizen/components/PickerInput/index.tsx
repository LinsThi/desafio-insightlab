import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

import * as Sty from './styles';
import { vaccinesName } from './mock';

export type PickerInputProps = PickerProps & {
  label: string;
};

export function PickerInput({
  label,
  selectedValue,
  onValueChange,
}: PickerInputProps) {
  return (
    <Sty.Container>
      <Sty.LabelInput>{label}</Sty.LabelInput>

      <Sty.ContainerPicker>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          dropdownIconColor="#acaaaa"
        >
          <Picker.Item
            label="Escolha o tipo de vacina"
            value="0"
            enabled={false}
            color="#acaaaa"
          />

          {vaccinesName.map(vacine => {
            return (
              <Picker.Item
                label={vacine.label}
                value={vacine.value}
                key={vacine.id}
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                }}
              />
            );
          })}
        </Picker>
      </Sty.ContainerPicker>
    </Sty.Container>
  );
}
