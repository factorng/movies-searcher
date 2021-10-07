import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import initialState from './initialState';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);

const store = createStore(rootReducer,
  initialState,
  composedEnhancer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
