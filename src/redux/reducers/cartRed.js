import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const INTIAL_STATE = {
  data: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART", action.payload);
      return { ...state, data: state.data.concat(action.payload) };

    case REMOVE_FROM_CART:
      return { ...state };

    default:
      return state;
  }
};

const addToArray = ({ item }) => {
  data.push(item);
};

const removeFromArray = () => {};
