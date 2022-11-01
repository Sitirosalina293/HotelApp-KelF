import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from './pages';
import Router from './router';

import {enableLatestRenderer} from 'react-native-maps';
import { Provider } from 'react-redux';

const App = () => {
  enableLatestRenderer();
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    // </Provider>
  );
};

export default App;
