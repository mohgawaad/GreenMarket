import { KIND_HANDLER } from '../actions/types'
 const INTIAL_STATE = {
   
    dataOfKind:{}
}
export default (state = INTIAL_STATE, action) => {
    console.log("arrarrarr",action)

    //let arr =getData(action.data);
    //console.log("arr", arr)
    switch (action.type) {
        case KIND_HANDLER:
        console.log('action.payloadaction.payloadaction.payload ' , action)
            return { ...state, dataOfKind: action.payload };

        default:
            return state;
    }
}