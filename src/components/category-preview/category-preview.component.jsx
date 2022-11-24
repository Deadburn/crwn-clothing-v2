import ProductCard from "../product-card/product-card.component";

import {
  CategoriesPreviewTitle,
  CategoryPreviewContainer,
  CategoryPreviewPage,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoriesPreviewTitle to={`${title}`}>
          {title?.toUpperCase()}
        </CategoriesPreviewTitle>
      </h2>
      <CategoryPreviewPage>
        {products
          ?.filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewPage>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
