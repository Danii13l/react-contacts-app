import { combineReducers, createStore } from 'redux';


//reducers
import { layoutView } from './ruducersAndActions/layout/layoutVIew';



let rootReducer = combineReducers({
  layoutView
});

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;