import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
const array = [];

export const addToCart = item => {
  console.log("addToCart", item);
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };
};

export const removeFromCart = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    });
  };
};
