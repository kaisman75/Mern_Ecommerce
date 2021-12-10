

 import { configureStore } from '@reduxjs/toolkit';
import { 
   PRODUCTS_LIST_FAIL,
   PRODUCTS_LIST_REQUEST,
   PRODUCTS_LIST_SUCCES,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCES,
   PRODUCT_DETAILS_FAIL } from "./Constante";
import { combineReducers } from 'redux';




 const  prodListReducer =(state={products:[]},action)=>{
   switch(action.type){
     case PRODUCTS_LIST_REQUEST:
     return{loading:true};
     case PRODUCTS_LIST_SUCCES:
        return {loading:false,products:action.payload};
     case PRODUCTS_LIST_FAIL:
        return{loading:false,error:action.payload} ;
     default:
        return state     
  }
 }
 const  prodDetailsReducer =(state={product:{}},action)=>{
   switch(action.type){
     case PRODUCT_DETAILS_REQUEST:
     return{loading:true};
     case PRODUCT_DETAILS_SUCCES:
        return {loading:false,product:action.payload};
     case PRODUCT_DETAILS_FAIL:
        return{loading:false , error:action.payload} ;
     default:
        return state     
  }
 }
 const reducer=combineReducers({
   ProductsList:prodListReducer ,
    ProductDetails: prodDetailsReducer,
 })  
 

 const store=configureStore({reducer});

 export default store;