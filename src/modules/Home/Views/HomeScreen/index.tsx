import React from 'react';
import { FlatList } from '../../components/FlatList';
import { FloatButton } from '../../components/FloatButton';
import { Header } from '../../components/Header';

import * as Sty from './styles';

export function HomeScreen() {
  return (
    <Sty.Container>
      <Header />

      <FlatList />

      <FloatButton />
    </Sty.Container>
  );
}
