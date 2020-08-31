import {applyMiddleware, createStore} from 'redux';
import { PizzaReducer } from './PizzaReducer';
import {CommonReducer} from './CommonReducer';
import{CartReducer} from './CartReducer';
import thunk from 'redux-thunk';

export const PizzaDataStore = createStore(CommonReducer(PizzaReducer, CartReducer), applyMiddleware(thunk));
