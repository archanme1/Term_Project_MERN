import React from "react";
import { Link } from "react-router-dom";

// import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>{/* <ReactStars {...options} />{" "} */}</div>
      <span>{`$${product.price}`}</span>
    </Link>
  );
};

export default Product;
