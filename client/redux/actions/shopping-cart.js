
import axios from "axios";
import { createAction } from "redux-actions";

export const increase_quantity_from_cart = createAction(
  "INCREASE_QUANTITY_FROM_CART"
);

export const decrease_quantity_from_cart = createAction(
  "DECREASE_QUANTITY_FROM_CART"
);

export const empty_cart = createAction(
  "EMPTY_CART"
);
