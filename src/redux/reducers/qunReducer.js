import { CHANGE_QUNTITY } from '../actions/types'

const INTIAL_STATE = {
    qty: 1
}
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_QUNTITY:
            return { ...state, qty: action.payload }; break;

        default:
            return state;
    }
}