import React, { useContext } from "react";
import Context from "./Context";
const Form = () => {
  const { inputValue, setInputValue, setLists, lists, isEditMode, editList } =
    useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    setLists([...lists, { id: Math.random().toString(), list: inputValue }]);
  };

  const editHandler = (e) => {
    e.preventDefault();
    setLists(
      lists.map((list) => {
        if (list.id === editList) {
          return { ...list, list: inputValue };
        }
        return list;
      })
    );
  };
  return (
    <>
      {isEditMode && (
        <form onSubmit={editHandler}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      )}
      {!isEditMode && (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Form;
