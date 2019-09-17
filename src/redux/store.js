import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import {AsyncStorage} from 'react-native';

import Qtyred from "./reducers/qunReducer"
import CouRed from './reducers/countReducer'
import KindRed from './reducers/kindReducer'
const reducers = combineReducers({
    qun: Qtyred,
    coun:CouRed,
    kindd:KindRed
    
})
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
   //blacklist :['kindd']
  }

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer , {} , applyMiddleware(ReduxThunk) );
const  persistor = persistStore(store) ;
export default { store, persistor };


//const store = createStore(reducers);
//export default store;









 

 
