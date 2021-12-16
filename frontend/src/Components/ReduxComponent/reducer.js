import { 
    PRODUCTS_LIST_FAIL,
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCES,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCES,
    PRODUCT_DETAILS_FAIL ,
    ADD_CART_ITEM
} from "./Constante";
    import { Products_List,Product_DETAILS,Add_to_CART } from './reduxActions';

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

      const CartReducer=(state={cartItems:[]},action)=>{
          switch(action.type){
              case ADD_CART_ITEM:
                  const item=action.payload;
                  const existItem= state.cartItems.find(x=>x.product===item.product);
                  if(existItem){
                      return{...state,cartItems:state.cartItems.map(x=>
                    x.product===existItem.product?item:x
                    )}
                  }else{
                      return{...state,cartItems:[...state.cartItems,item]}
                  }
              default:
                  return state;    
          }
      }
     export const reducer=combineReducers({
       Products_List : prodListReducer,
       Product_DETAILS: prodDetailsReducer,
       Add_to_CART:CartReducer
     })  