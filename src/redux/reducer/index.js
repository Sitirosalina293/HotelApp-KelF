import {combineReducers} from 'redux';
import auth from './auth';
import {productReducer} from './product';

const reducer = combineReducers({
  auth,
  productReducer,
});

export default reducer;
