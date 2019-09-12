import { KIND_HANDLER ,PRICE_ITEM,ADD_TO_CART,ADD_TO_TITLE} from "./types";
import axios from "axios";

export const kindHandler = data => {
  return dispatch => {
    dispatch({
      type: 'KIND_LOADING',
      payload: false
    });
    axios
      .get(data.URL)
      .then(res => {
        dispatch({
          type: KIND_HANDLER,
          payload: res.data.data.Product_By_CatID
        });
      })
      .catch(err => alert("errrrrrror ", err));
  };
};
export const priceItem = data => {
  return dispatch => {
    dispatch({
      type: PRICE_ITEM,
      payload: data
    });
  
  };
};

export const addToCart = data => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: data
    });
  
  };
};
export const addToTitle = data => {
  return dispatch => {
    dispatch({
      type: ADD_TO_TITLE,
      payload: data
    });
  
  };
};