import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    const productExist = cartProducts.find(
      (cartPd) => cartPd.key === product.key
    );
    let updatedCart = [];
    if (productExist) {
      const rest = cartProducts.filter((cartPd) => cartPd.key !== product.key);
      product.quantity = product.quantity + 1;
      updatedCart = [...rest, product];
    } else {
      product.quantity = 1;
      updatedCart = [...cartProducts, product];
    }
    console.log(updatedCart);
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

        <Cart cartProducts={cartProducts}>
          <Link to="/review">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
