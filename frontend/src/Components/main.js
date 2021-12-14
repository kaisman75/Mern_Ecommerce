import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import Product from './Screens/ProductScreen';
import {CardScreen} from "./Screens/cartScreen"
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
            <Route exact path="Product/:id" element={<Product/>}></Route>
        </Routes>
      
        </Router>


       
    )
}

export default Main
