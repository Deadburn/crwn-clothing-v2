import { useContext } from "react";



import { CartContext } from "../../contexts/cart.context";
import { CheckOutItemArrow, CheckOutItemContainer, CheckOutItemImgContainer, CheckOutItemName, CheckOutItemPrice, CheckOutItemQty, CheckOutItemRemove, CheckOutItemVal } from "./checkout-item.styles";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const clearItemHandler = () => removeItemFromCart(cartItem, true);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

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
        <CheckOutItemArrow onClick={addItemHandler}>
          &#10095;
        </CheckOutItemArrow>
      </CheckOutItemQty>
      <CheckOutItemPrice>{price}</CheckOutItemPrice>
      <CheckOutItemRemove onClick={clearItemHandler}>
        &#10005;
      </CheckOutItemRemove>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
