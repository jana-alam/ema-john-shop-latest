import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h2>Price: ${price}</h2>
        <p>by:{seller}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Product;
