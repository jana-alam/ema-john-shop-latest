import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const updatedCart = cart.filter((product) => product.key !== key);
    setCart(updatedCart);
    deleteFromDb(key);
  };
  // handle order now
  const handleOrderNow = () => {
    history.push("/placeorder");
    setCart([]);
    clearCart();
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
        <Cart cartProducts={cart}>
          <button onClick={handleOrderNow}>Order Now</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
