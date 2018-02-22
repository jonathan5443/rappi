import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, applyMiddleware(thunk),
  );
  return store;
};

export const store = configureStore();  
