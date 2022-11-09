import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducer';


const middleware = [thunk];
const store = createStore(authReducer, applyMiddleware(...middleware));
export default store