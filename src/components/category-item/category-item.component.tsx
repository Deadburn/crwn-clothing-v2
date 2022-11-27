import { BackgroundImageDiv, CategoryBodyContainer, CategoryContainer } from "./category-item.styles";

const CategoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;
  return (
    <CategoryContainer>
      <BackgroundImageDiv
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryBodyContainer>
        <h2>{title}a</h2>
        <p>Shop Nowaaaaaaaaaaaaa</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
