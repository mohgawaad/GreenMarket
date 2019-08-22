import {CHANGE_QUNTITY} from './types'


export const changeQty =(value)=>{

    return{
        type:CHANGE_QUNTITY,
        payload:value

    }
}