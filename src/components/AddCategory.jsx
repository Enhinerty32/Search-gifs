import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
    // console.log(target.value)
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue); 

    if (inputValue.trim().length<=1)return ;
    onNewCategory(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={(event) => onInputChange(event)}
        value={inputValue}
      />
    </form>
  );
};
