import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = function addToCart (items, product) {
  let productAlreadyInCart = false;
  const cartItems = items.slice();
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return {
    type: ADD_TO_CART,
    items: cartItems,
  };
};

export const removeFromCart = function removeFromCart (items, item) {
  const cartItems = items.slice().filter(elm => elm.id !== item.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return {
    type: REMOVE_FROM_CART,
    items: cartItems,
  };
};
