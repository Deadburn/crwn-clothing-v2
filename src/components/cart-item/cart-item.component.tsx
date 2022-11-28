import { FC, memo } from "react";
import { CartItem as Item } from "../../store/cart/cart.types";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: Item;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
