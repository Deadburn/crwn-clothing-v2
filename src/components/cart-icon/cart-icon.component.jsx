import { useContext } from "react";


import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.jsx";
import { CartIconContainer, CartIconItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";



const CartIcon = () => {
  const { isCartOpen ,setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <CartIconItemCount>{cartCount}</CartIconItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
