

 import { configureStore } from '@reduxjs/toolkit';
import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCES } from "./Constante";
import { combineReducers } from 'redux';




 const  prodReducer =(state={products:[]},action)=>{
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
 const reducer=combineReducers({
 productsList : prodReducer,
 })   
 const store=configureStore({reducer});

 export default store;