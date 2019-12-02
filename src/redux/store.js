import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budgetReducer';

const store = createStore(budgetReducer, devToolsEnhancer());

export default store;
