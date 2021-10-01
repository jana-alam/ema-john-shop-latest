// get shopping-cart from localstorage

const getDb = () => localStorage.getItem("shopping_cart");
// update shopping-cart in localstorage

const updateDb = (cartProduct) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cartProduct));
};

// add to localStorage

const addToDb = (id) => {
  const exist = getDb();
  let shopping_cart = {};
  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);
    if (shopping_cart[id]) {
      shopping_cart[id] += 1;
    } else {
      shopping_cart[id] = 1;
    }
  }

  updateDb(shopping_cart);
};

export { addToDb };
