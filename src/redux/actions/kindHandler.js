import {KIND_HANDLER} from './types'
import{getData} from '../../utils/fetchData'
import axios from 'axios'

var myData;
export const kindHandler =(data)=>{
   

    //console.log("data =>>>>>>" , data)
    axios.get(data.URL)
    .then(res=>{console.log('resssssssss',res.data.data.Product_By_CatID);
     myData=res.data.data.Product_By_CatID;
    return myData}).then(()=>{
        console.log("data =>>>>>>" , myData)
    })
    .catch((err) => alert("errrrrrror ",err)) 
   
    return{
        type:KIND_HANDLER,
        myData,
    }
}