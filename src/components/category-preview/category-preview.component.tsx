import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card.component";

import {
  CategoriesPreviewTitle,
  CategoryPreviewContainer,
  CategoryPreviewPage,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
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
