import { handleActions } from "redux-actions";

const initialState = {
  categories: {},
  products: {}
};

const actionMap = {};

actionMap.FETCH_CATEGORIES = (state, action) => {
  const newState = {
    ...state,
    categories: action.payload
  };
  return newState;
};

actionMap.FETCH_PRODUCTS = (state, action) => {
  const newState = {
    ...state,
    products: action.payload
  };
  return newState;
};

export default handleActions(actionMap, initialState);