import React from 'react';
import { Provider as StorageProvider } from 'react-redux';

import { StackRoutes } from './shared/routes';
import store from './shared/store';

export default function App() {
  return (
    <StorageProvider store={store}>
      <StackRoutes />
    </StorageProvider>
  );
}
