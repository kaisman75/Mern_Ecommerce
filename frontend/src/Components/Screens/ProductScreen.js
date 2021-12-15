import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../Rating";
import { Product_DETAILS } from "../ReduxComponent/reduxActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { Link,useNavigate,useParams } from "react-router-dom";

export default function Product() {
    const params = useParams();
    const Navigate=useNavigate()
    const { id:productId } = params;
 
  const dispatch = useDispatch();
  const detailsProduct = useSelector((state) => state.ProductDetails);
  const { loading, error, product } = detailsProduct;
  const [qty,setQty]=useState(1);
  useEffect(() => {
    dispatch(Product_DETAILS(productId));
  }, [dispatch,productId]);

  

  if (!product) {
    return <div>Product Not Found</div>;
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
    description,
  } = product;

const addCardHandler=()=>{
   Navigate(`/cart/${productId}?qty=${qty}`);
  }

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-1">
              <img src={image} alt={name} />
            </div>
            <div className="col-2">
              <h1>{name}</h1>
              <li>{brand}</li>
              <li>{category}</li>
              <br />
              <Rating numReviews={numReviews} rating={rating} />
              <li>Price : ${price}</li>
              <li>{description}</li>
            </div>
            <div className="col-3">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row top">
                      <div>Price :</div>
                      <div className="price">$ {price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>status :</div>
                     
                        {countInStock > 0 ? (
                          <> 
                          <div>
                          <span className="success">InStock</span>
                          </div>
                          <div className="row">
                            <div>Qty : </div>
                            <div>
                                <select value={qty} onChange={(e=>{setQty(e.target.value)})}>
                                  {[...Array(product.countInStock).keys()].map(e=>
                                    <option key= {e+1} value={e+1}>{e+1}</option>
                                  )}
                                </select>
                                </div> 
                          </div>
                          </>
                        ) : (
                          <span className="danger">Stock Out</span>
                        )}
                      </div>
                    
                  </li>
                  <li>
                    <button className="primary block" onClick={addCardHandler}>Add To Card</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
