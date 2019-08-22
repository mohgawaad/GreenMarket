import { createStore, combineReducers } from 'redux';
import Qtyred from "./reducers/qunReducer"
const reducers = combineReducers({
    qun: Qtyred
})
const store = createStore(reducers);
export default store;