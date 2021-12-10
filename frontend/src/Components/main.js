import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import Product from './Screens/ProductScreen';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
  

const Main = () => {
   
    return (
        <Router>
       
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} ></Route>
            <Route exact path="Product/:productId" element={<Product/>}></Route>
        </Routes>
      
        </Router>


       
    )
}

export default Main
