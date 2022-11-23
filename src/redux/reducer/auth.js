import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SUCCESS, LOGOUT } from '../action/index';
const user = AsyncStorage.getItem('user');

const initialState = typeof user === 'string' 
  ? {isLoggedIn: true, user}
  : {isLoggedIn: false, user: null};

export default auth = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
