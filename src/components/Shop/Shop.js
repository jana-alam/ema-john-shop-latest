import React, { useEffect, useState } from "react";
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

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* Products will be displayed here */}
        {products.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Shop;
