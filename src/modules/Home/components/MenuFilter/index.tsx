import React, { SetStateAction, Dispatch } from 'react';

import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { setFilterVacinnesAction } from '~/shared/store/ducks/citizensVacinned/actions';

import * as Sty from './styles';

type MenuFilterProps = {
  visible: boolean;
  selectedItem: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export default function MenuFilter({
  visible,
  selectedItem,
  setVisible,
}: MenuFilterProps) {
  const dispatch = useDispatch();
  const selectItem = (filter: string) => {
    dispatch(setFilterVacinnesAction(filter));
    setVisible(false);
  };

  const theme = useTheme();
  const { Colors } = theme;

  return (
    <Menu
      visible={visible}
      anchor={<Sty.IconMenu name="ios-filter" type="ionicons" />}
      onRequestClose={() => setVisible(false)}
    >
      <MenuItem disabled>Filtrar por: </MenuItem>
      <MenuDivider />
      <MenuItem
        onPress={() => selectItem('1')}
        style={
          selectedItem === '1'
            ? { backgroundColor: Colors.ITEM_PICKER_DISABLED }
            : {}
        }
      >
        Dose 1
      </MenuItem>
      <MenuItem
        onPress={() => selectItem('2')}
        style={
          selectedItem === '2'
            ? { backgroundColor: Colors.ITEM_PICKER_DISABLED }
            : {}
        }
      >
        Dose 2
      </MenuItem>
      <MenuItem
        onPress={() => selectItem('')}
        style={
          selectedItem === ''
            ? { backgroundColor: Colors.ITEM_PICKER_DISABLED }
            : {}
        }
      >
        Qualquer dose
      </MenuItem>
    </Menu>
  );
}
