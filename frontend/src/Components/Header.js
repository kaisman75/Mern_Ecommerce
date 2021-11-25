import React from 'react'

function Header() {
    return (
      
            <header className="row">
      <div>
        <a className="brand" href="/">ManShop</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
        
    )
}

export default Header
