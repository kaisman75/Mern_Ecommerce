import { prodListReducer,prodDetailsReducer,CartReducer} from "./reducer"
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

const initialState={
    cart:{
       cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
    },
   }

 const reducer=combineReducers({
    Products_List : prodListReducer,
    Product_DETAILS: prodDetailsReducer,
    Add_to_CART:CartReducer,
  })  ;
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store=createStore(initialState,reducer,composeEnhancer(applyMiddleware(thunk)));

 export default store;