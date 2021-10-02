import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
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
      setCart(savedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;
