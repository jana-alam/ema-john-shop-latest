import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartProducts } = props;
  let total = 0;
  let totalQuantity = 0;
  for (const cartProduct of cartProducts) {
    if (!cartProduct.quantity) {
      cartProduct.quantity = 1;
    }
    total = total + cartProduct.price;
    totalQuantity = totalQuantity + cartProduct.quantity;
  }
  let shipping = 0;
  if (total > 0) {
    shipping = 15;
  } else if (total > 300) {
    shipping = 30;
  }
  const tax = total + total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary</h3>
      <h2>Items Ordered:{totalQuantity}</h2>
      <h5>Total: {total.toFixed(2)}</h5>
      <h5>Shipping: {shipping}</h5>
      <h5>tax: {tax.toFixed(2)}</h5>
      <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
