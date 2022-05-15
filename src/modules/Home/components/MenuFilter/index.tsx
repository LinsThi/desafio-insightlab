import React, { SetStateAction, Dispatch } from 'react';

import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useDispatch } from 'react-redux';
import { setFilterVacinnesAction } from '~/shared/store/ducks/citizensVacinned/actions';

import * as Sty from './styles';

type MenuFilterProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export default function MenuFilter({ visible, setVisible }: MenuFilterProps) {
  const dispatch = useDispatch();
  const selectItem = (filter: string) => {
    dispatch(setFilterVacinnesAction(filter));
    setVisible(false);
  };

  return (
    <Menu
      visible={visible}
      anchor={<Sty.IconMenu name="ios-filter" type="ionicons" />}
      onRequestClose={() => setVisible(false)}
    >
      <MenuItem disabled>Filtrar por: </MenuItem>
      <MenuDivider />
      <MenuItem onPress={() => selectItem('1')}>Dose 1</MenuItem>
      <MenuItem onPress={() => selectItem('2')}>Dose 2</MenuItem>
      <MenuItem onPress={() => selectItem('')}>Qualquer dose</MenuItem>
    </Menu>
  );
}
