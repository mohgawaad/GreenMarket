import { COUNT } from '../actions/types'
const INTIAL_STATE = {
   count:1
}
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case COUNT:
            return { ...state, count: action.payload }
        default:
            return  state 
    }
}