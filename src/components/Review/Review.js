import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const updatedCart = cart.filter((product) => product.key !== key);
    setCart(updatedCart);
    deleteFromDb(key);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartProducts={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
