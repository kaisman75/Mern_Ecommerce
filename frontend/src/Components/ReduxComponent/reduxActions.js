import Axios from "axios";
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCES,
  PRODUCTS_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCES,
  PRODUCT_DETAILS_FAIL,
  ADD_CART_ITEM
} from "./Constante";

export const Products_List = async (dispatch) => {
  dispatch({ type: PRODUCTS_LIST_REQUEST });
  try {
    const { data } = await Axios.get("api/products");
    dispatch({ type: PRODUCTS_LIST_SUCCES, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message });
  }
};

export const Product_DETAILS = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCES, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Add_to_CART =(productId , qty )=>async(dispatch,getState)=>{
    const {data}=await Axios.get(`/api/products/${productId}`);
    dispatch({type:ADD_CART_ITEM,
    payload:{
      name:data.name,
      product:data._id,
      category:data.category,
      image:data.image,
      price:data.price,
      countInStock:data.countInStock,
      qty
    }
    })
      
     } ;
