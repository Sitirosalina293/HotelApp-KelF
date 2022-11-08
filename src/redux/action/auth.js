import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
  return async dispatch => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (authToken) {
        console.log('authToken', authToken);
        dispatch({type: 'LOGIN', payload: authToken});
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const Login = (email, password) => {
  return async dispatch => {
    try {
      let authToken = null;
      if (email === 'user@gmail.com' && password === '12345') {
        authToken = email + password;
        await AsyncStorage.setItem('authToken', authToken);
        console.log('token stored');
      }
      dispatch({type: 'LOGIN', payload: authToken});
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const Logout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.clear('authToken');
      dispatch({type: 'LOGOUT'});
    } catch (error) {
      console.log('error', error);
    }
  };
};
