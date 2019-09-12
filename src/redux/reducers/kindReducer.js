import { KIND_HANDLER, PRICE_ITEM, ADD_TO_CART,ADD_TO_TITLE } from "../actions/types";
const INTIAL_STATE = {
  loading: false,
  dataOfKind: {},
  itemOfCart: {},
  myTitle:'',
  myOrder: null
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

    case ADD_TO_CART:
      console.log("payload", action.payload);
      /* return { ...state, myOrder: state.myOrder.concat(action.payload) }; */
      return { ...state, myOrder: action.payload};
      case ADD_TO_TITLE:
      console.log("payload", action.payload);
      return { ...state, myTitle: action.payload};
    default:
      return state;
  }
};
