import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removetCartItem = (cartItems, currentItem, isAllItem) => {
  if (currentItem.quantity <= 1 || isAllItem) {
    return cartItems.filter((cartItem) => cartItem.id !== currentItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === currentItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove, isAllItem) => {
  const newCartItems = removetCartItem(cartItems, cartItemToRemove, isAllItem);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setCartItems = (cartItemsArray) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemsArray);

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
