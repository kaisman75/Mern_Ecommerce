import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
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
            <Route exact path="ProductScreen/:id" element={<ProductScreen/>}></Route>
        </Routes>
      
        </Router>


       
    )
}

export default Main
