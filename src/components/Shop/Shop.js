import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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

  // get data from localstorage and set to cart if any

  useEffect(() => {
    if (products.length) {
      const dbCart = getStoredCart();
      const savedCart = [];
      for (const key in dbCart) {
        const dbProduct = products.find((product) => product.key === key);

        // if (dbCart[key] > 1) {
        //   for (let i = 1; i <= dbCart[key]; i++) {
        //     savedCart.push(dbProduct);
        //   }
        // } else {
        //   savedCart.push(dbProduct);
        // }
        if (dbProduct) {
          dbProduct.quantity = dbCart[key];
          savedCart.push(dbProduct);
        }
      }
      setCartProducts(savedCart);
    }
  }, [products]);

  //   handle add to cart from products
  const handleAddToCart = (product) => {
    const updatedCart = [...cartProducts, product];
    setCartProducts(updatedCart);
    addToDb(product.key);
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
