import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";

import {
  CheckOutItemArrow,
  CheckOutItemContainer,
  CheckOutItemImgContainer,
  CheckOutItemName,
  CheckOutItemPrice,
  CheckOutItemQty,
  CheckOutItemRemove,
  CheckOutItemVal,
} from "./checkout-item.styles";

type CheckOutItemProps = {
  cartItem: CartItem;
};

const CheckOutItem: FC<CheckOutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem, true));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem, false));

  return (
    <CheckOutItemContainer>
      <CheckOutItemImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckOutItemImgContainer>
      <CheckOutItemName>{name}</CheckOutItemName>
      <CheckOutItemQty>
        <CheckOutItemArrow onClick={removeItemHandler}>
          &#10094;
        </CheckOutItemArrow>
        <CheckOutItemVal>{quantity} </CheckOutItemVal>
        <CheckOutItemArrow onClick={addItemHandler}>&#10095;</CheckOutItemArrow>
      </CheckOutItemQty>
      <CheckOutItemPrice>{price}</CheckOutItemPrice>
      <CheckOutItemRemove onClick={clearItemHandler}>
        &#10005;
      </CheckOutItemRemove>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
