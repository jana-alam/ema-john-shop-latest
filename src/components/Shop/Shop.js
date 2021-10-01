import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // loading all products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   State for Cart Items
  const [cartProducts, setCartProducts] = useState([]);

  //   handle add to cart
  const handleAddToCart = (product) => {
    console.log(product);
    const updatedCart = [...cartProducts, product];
    // console.log(updatedCart);
    setCartProducts(updatedCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* Products will be displayed here */}
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* Cart  component */}

        <Cart cartProducts={cartProducts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
