import { combineReducers } from "redux";
import shoppingCart from "./shopping-cart";
import store from "./store";

const rootReducer = combineReducers({
  store,
  shoppingCart,
});

export default rootReducer;