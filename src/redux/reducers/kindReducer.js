import { KIND_HANDLER, PRICE_ITEM } from "../actions/types";
const INTIAL_STATE = {
  loading: false,
  dataOfKind: {},
  itemOfCart:{},
};
export default (state = INTIAL_STATE, action) => {
  console.log("arrarrarr", action);

  //let arr =getData(action.data);
  //console.log("arr", arr)
  switch (action.type) {
    case "KIND_LOADING":
      return { ...state, loading: action.payload };

    case KIND_HANDLER:
      console.log("action.payloadaction.payloadaction.payload ", action);
      return { ...state, dataOfKind: action.payload, loading: true };

    case PRICE_ITEM:
      return { ...state, itemOfCart: action.payload };

    default:
      return state;
  }
};
