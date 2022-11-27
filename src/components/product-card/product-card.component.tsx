import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { ProductCardContainer, ProductCardFooter, ProductCardImg, ProductCardName, ProductCardPrice } from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem
}


const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems)
  
  
   const addProductToCart = () => (dispatch(addItemToCart(cartItems ,product)));

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
