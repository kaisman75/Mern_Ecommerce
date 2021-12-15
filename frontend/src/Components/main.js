import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import Product from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen'
import {
    BrowserRouter as Router,
    Routes,
    Route,
   
    
  } from "react-router-dom";
  

const Main = () => {
   
    return (
        <Router>
       
        <Routes>
            <Route exact path="/" element = { <HomeScreen/> } ></Route>
            <Route exact path="Product/:id" element = { <Product/>} ></Route>
            <Route exact path="/cart/:id" element = { <CartScreen/>} ></Route>
        </Routes>
      
        </Router>


       
    )
}

export default Main
