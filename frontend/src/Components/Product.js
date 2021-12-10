import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {
        _id,
        name,
        category,
        image,
        price,
        countInStock,
        brand,
        rating,
        numReviews,
        description 
    
    } = product;

       
    return (
            <Link to={`/Product/${_id}`}>
             <div key={_id} className="card">
                                <a>

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
            </Link>
    
    )
}

export default Product
