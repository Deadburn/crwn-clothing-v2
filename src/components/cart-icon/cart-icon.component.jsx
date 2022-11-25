
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";

import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  CartIconItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () =>
    dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartIconItemCount>{cartCount}</CartIconItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
