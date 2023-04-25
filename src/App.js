import React, { useReducer, useState } from "react";

// ! useReducer______________________start
// const intialValue = {
//   people: [],
// };

// function reducer(state, action) {
//   if (action.type === "ADD_NAME") {
//     const newPeople = [...state.people, action.payload];
//     return { ...state, people: newPeople };
//   }
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [state, dispatch] = useReducer(reducer, intialValue);

//   const formHandler = (e) => {
//     e.preventDefault();
//     const newName = { id: Math.random().toString(), name: inputValue };
//     dispatch({ type: "ADD_NAME", payload: newName });
//     setInputValue("");
//   };

//   return (
//     <>
//       <form onSubmit={formHandler}>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <ul>
//         {state.people.map((p) => (
//           <li key={p.id}>{p.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// ! useReducer______________________end
// ! useContext______________________start

import Context from "./Context";
import Form from "./Form";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const [editList, setEditList] = useState("");

  function deleteItem(id) {
    setLists(lists.filter((list) => list.id !== id));
  }
  return (
    <Context.Provider
      value={{
        inputValue,
        setInputValue,
        lists,
        deleteItem,
        setLists,
        isEditMode,
        setEditMode,
        editList,
        setEditList,
      }}
    >
      <div>
        <h1>Context Api</h1>
        <Form />
        <List />
      </div>
    </Context.Provider>
  );
}
// ! useContext_____________________end

export default App;
