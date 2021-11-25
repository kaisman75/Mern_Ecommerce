import React from 'react'
import data from "../../data"
import Product from '../Product';

const HomeScreen = () => {
    const Products = data.products;
    return (
        
             <div>
                <div className="row center">
                    {
                    Products.map((product) => {
                       
                        return (
                           <Product product={product}></Product>
                
           ) })}

                </div>
            </div>
        
    )
}

export default HomeScreen
