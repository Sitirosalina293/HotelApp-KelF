import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import Toast from 'react-native-toast-message';
import {enableLatestRenderer} from 'react-native-maps';
import {Provider} from 'react-redux';
import store from './redux/store';


const App = () => {
  enableLatestRenderer();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
