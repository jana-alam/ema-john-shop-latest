import React from "react";

const ReviewItem = (props) => {
  const { key, img, name, price, seller, quantity } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h2>Price: ${price}</h2>
        <p>by:{seller}</p>
        <p>{quantity}</p>
        <button
          style={{
            backgroundColor: "#d71d48",
            color: "white",
          }}
          onClick={() => props.handleRemove(key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
