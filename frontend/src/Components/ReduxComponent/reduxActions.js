import  axios  from "axios";
import { 
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCES,
    PRODUCTS_LIST_FAIL
 } from "./Constante";




 export const Products_List = async (dispatch)=>{
     
        dispatch({type:PRODUCTS_LIST_REQUEST});
    try{
        const { data }= await axios.get('api/products');
        dispatch({type:PRODUCTS_LIST_SUCCES,payload:data});
    }catch(error){
        dispatch({type:PRODUCTS_LIST_FAIL,payload:error.message})
    }
     }

 