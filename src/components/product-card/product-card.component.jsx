import { useContext } from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { ProductCardContainer, ProductCardFooter, ProductCardImg, ProductCardName, ProductCardPrice } from "./product-card.styles";



const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
