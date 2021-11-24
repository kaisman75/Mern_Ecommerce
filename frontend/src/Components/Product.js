import React from 'react'
import Rating from './Rating';
const Product = ({product}) => {
    const {_id,
        name,
        category,
        image,
        price,
        countInStock,
        brand,
        rating,
        numReviews,
        description } = product;
    return (
    
             <div Key={_id} className="card">
                                <a href="product.html">

                                    <img className="medium" src={image} alt={name} />
                                </a>
                                <div className="card-body">
                                    <a href="product.html">
                                        <h2>{name}</h2>
                                    </a>
                                
                                 </div>
                                 <Rating rating={rating} numReviews={numReviews}></Rating>
                                 
                                 <div className="price">Price: ${price}</div>
                  </div>
    
    )
}

export default Product
