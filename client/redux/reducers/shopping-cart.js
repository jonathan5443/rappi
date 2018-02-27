import { handleActions } from "redux-actions";

const initialState = {
  products: {},
  total: 0
};

const actionMap = {};

function increaseQuantity(prevProducts, payload) {
  const newProducts = Object.assign({}, prevProducts);

  newProducts[payload.id] = {
    ...payload,
    quantity: prevProducts[payload.id]
      ? prevProducts[payload.id].quantity + 1
      : 1
  };
  return newProducts;
}

function decreaseQuantity(prevProducts, payload) {
  const newProducts = Object.assign({}, prevProducts);

  if (prevProducts[payload.id].quantity > 1) {
    newProducts[payload.id] = {
      ...prevProducts[payload.id],
      quantity: prevProducts[payload.id].quantity - 1
    };
  } else {
    delete newProducts[payload.id];
  }
  return newProducts;
}

actionMap.INCREASE_QUANTITY_FROM_CART = (state, action) => ({
  total: state.total +  Number(action.payload.price.replace(/[^0-9\.-]+/g,""))/1000,
  products: increaseQuantity(state.products, action.payload)
});

actionMap.DECREASE_QUANTITY_FROM_CART = (state, action) => ({
  total: state.total - action.payload.price,
  products: decreaseQuantity(state.products, action.payload)
});

actionMap.EMPTY_CART = (state, action) => ({
  total: 0,
  products: {}
});


export default handleActions(actionMap, initialState);