import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../Rating";
import { Product_DETAILS } from "../ReduxComponent/reduxActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { Link,useParams } from "react-router-dom";

export default function Product(props) {
    const params = useParams();
    const {productId} = params;

  const dispatch = useDispatch();
  const detailsProduct = useSelector((state) => state.ProductDetails);
  const { loading, error, product } = detailsProduct;
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
                      <div>
                        {countInStock > 0 ? (
                          <span className="success">InStock</span>
                        ) : (
                          <span className="danger">Unvalable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add To Card</button>
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
