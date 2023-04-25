import React, { useContext } from "react";
import Context from "./Context";

const List = () => {
  const { lists, deleteItem, setEditList, setEditMode, setInputValue } =
    useContext(Context);

  function editItem(list) {
    setEditMode(true);
    setEditList(list.id);
    setInputValue(list.list);
  }
  return (
    <ul>
      {lists.map((list) => {
        return (
          <li key={list.id}>
            {list.list}
            <button onClick={() => editItem(list)}>Edit</button>
            <button onClick={() => deleteItem(list.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
