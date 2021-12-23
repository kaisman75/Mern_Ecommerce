import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
function Header() {
   const Products=useSelector(state => state.cartItems);
   //const Length=Products.length;
   const handleProducts=()=>{
    console.log(Products)
   }
  return (

    <header className="row">
      <div>
        <Link className="brand" to="/">
          ManShop
        </Link>
      </div>
      <div className="row">
        
        <Link to="/cart" onClick={handleProducts}>Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  
  );
}

export default Header;
