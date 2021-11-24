import React from 'react'
import data from "../data"
import Product from './Product';

const Main = () => {
    const Products = data.products;
    return (
        <main>
            <div>
                <div className="row center">
                    {
                    Products.map((product) => {
                       
                        return (
                           <Product product={product}></Product>
                
           ) })}

                </div>
            </div>


        </main>
    )
}

export default Main
