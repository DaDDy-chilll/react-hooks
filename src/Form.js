import React, { useContext } from "react";
import Context from "./Context";
const Form = () => {
  const { inputValue, setInputValue, setLists, lists, isEditMode } =
    useContext(Context);
  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    setLists([...lists, { id: Math.random().toString(), list: inputValue }]);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
