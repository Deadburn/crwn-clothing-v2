import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";

import { categories } from "./categories.data";
import { DirectoryDiv } from "./directory.styles";

const Directory = () => {
  return (
    <DirectoryDiv>
      {categories?.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryDiv>
  );
};

export default Directory;
