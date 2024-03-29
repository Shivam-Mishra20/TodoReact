
//createStore and applyMiddleware from Redux
import { createStore } from 'redux';
//import reducer fn from reducers.js
import taskReducer from './Reducers';
  
//educer function and initial state
const store = createStore(taskReducer);

export default store;