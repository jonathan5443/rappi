import axios from "axios";
import { createAction } from "redux-actions";

export const create_store_structure = () => dispatch => {
  dispatch(get_store_categories());
  dispatch(get_store_products());
};

const fetch_categories = createAction("FETCH_CATEGORIES");
const fetch_products = createAction("FETCH_PRODUCTS");

const get_store_categories = () => dispatch => {
  axios.get('http://localhost:3000/categories')
    .then(function (response) {
      dispatch(fetch_categories(response.data.categories));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const get_store_products = () => dispatch => {
  axios.get('http://localhost:3000/products')
    .then(function (response) {
      dispatch(fetch_products(response.data.products));
    })
    .catch(function (error) {
      console.log(error);
    });
};