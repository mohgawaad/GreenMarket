import {COUNT} from './types'

export const countt=(value)=>{
    return{
        type:COUNT,
        payload:value
    }
}