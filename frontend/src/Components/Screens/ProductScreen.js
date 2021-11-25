import React from 'react'
import { useParams } from 'react-router'
import data from '../../data'
import Rating from '../Rating'

const ProductScreen = () => {
    let {id}=useParams()
    const product=data.products.find((x)=>
        x._id===id
       )
     if(!product){
    return(<div>Product Not Found</div>)
      }
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
        <div className="row top">
           <div className="col-2">
               <img src={image} alt={name} />

           </div>
           <div className="col-1">
               <h1>{name}</h1>
               <li>{brand}</li>
              <li>{category}</li> 
              <br/>
               <Rating numReviews={numReviews} rating={rating}/>
               <li>Price : ${price}</li> 
               <li>{description}</li>
            
           </div>
           <div className="col-1">
            
           </div>
        </div>
    )
}

export default ProductScreen
