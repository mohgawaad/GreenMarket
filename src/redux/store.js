import { createStore, combineReducers } from 'redux';
import Qtyred from "./reducers/qunReducer"
import CouRed from './reducers/countReducer'
import KindRed from './reducers/kindReducer'
const reducers = combineReducers({
    qun: Qtyred,
    coun:CouRed,
    kindd:KindRed
    
})
const store = createStore(reducers);
export default store;