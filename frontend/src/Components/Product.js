import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
    <div key={_id} className="card">
      <Link to={`/Product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <Link to={`/Product/${_id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <Rating rating={rating} numReviews={numReviews}></Rating>

      <div className="price">Price: ${price}</div>
    </div>
  );
};

export default Product;
