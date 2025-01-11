import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => {
          onAddCategory(value);
        }}
        // setCategory={setCategories}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {
        categories.map((itemCategory) => (
          <GifGrid key={itemCategory} category={itemCategory}/>
        ))}  
      </ol>
    </>
  );
};
