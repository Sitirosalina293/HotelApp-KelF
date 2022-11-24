import {combineReducers} from 'redux';
import auth from './auth';
import {productReducer} from './product';
import {profileReducer} from './profile';

const reducer = combineReducers({
  auth,
  productReducer,
  profileReducer,
});

export default reducer;
