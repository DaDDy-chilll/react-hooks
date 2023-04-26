import React, { useCallback, useEffect, useReducer, useState } from "react";

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

// import Context from "./Context";
// import Form from "./Form";
// import List from "./List";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [lists, setLists] = useState([]);
//   const [isEditMode, setEditMode] = useState(false);
//   const [editList, setEditList] = useState("");

//   function deleteItem(id) {
//     setLists(lists.filter((list) => list.id !== id));
//   }
//   return (
//     <Context.Provider
//       value={{
//         inputValue,
//         setInputValue,
//         lists,
//         deleteItem,
//         setLists,
//         isEditMode,
//         setEditMode,
//         editList,
//         setEditList,
//       }}
//     >
//       <div>
//         <h1>Context Api</h1>
//         <Form />
//         <List />
//       </div>
//     </Context.Provider>
//   );
// }
// ! useContext_____________________end
//! Router________________________start
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Products from "./routes/Products";
// import Login from "./routes/Login";
// import Error from "./routes/Error";
// import Dashborad from "./routes/Dashborad";
// import Profile from "./routes/Profile";
// import ShareLayout from "./routes/ShareLayout";
// import SingleProduct from "./routes/SingleProduct";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);
//   return (
//     <BrowserRouter>
//       <h1>React Router</h1>

//       <Routes>
//         <Route path="/" element={<ShareLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />

//           <Route
//             path="dashboard"
//             element={
//               <ProtectedRoute user={user}>
//                 <Dashborad user={user} />
//               </ProtectedRoute>
//             }
//           >
//             <Route path="profile" element={<Profile />} />
//           </Route>

//           <Route path="products" element={<Products products={products} />} />
//           <Route
//             path="products/:productId"
//             element={<SingleProduct products={products} />}
//           />
//           <Route path="login" element={<Login setUser={setUser} />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
//! Router________________________end
//! CustomerHook________________________start
// import useFetch from "./Hooks/useFetch";

// function App() {
//   const [posts, setPost] = useState([]);
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   const { loading, data } = useFetch(url);
//   console.log(data);
//   return (
//     <div className="container">
//       {loading && <h1>Data is Loading...</h1>}
//       {!loading && (
//         <ul>
//           {data.map((d) => (
//             <li key={d.id}>{d.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
//! CustomerHook________________________end
//! Memo ** useCallback________________________start
// import useFetch from "./Hooks/useFetch";
// import Memo from "./memo&useCallback/Memo";
// import Callback from "./memo&useCallback/useCallback";

// function App() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   const { loading, data } = useFetch(url);
//   const [count, setCount] = useState(0);

//   const deleteItem = useCallback(() => {
//     console.count("delete count");
//   }, []);
//   return (
//     <>
//       {loading && <h1 className="h1 text-center text-color-red">Loading</h1>}
//       {!loading && (
//         <div>
//           <div className="container">
//             <h1 className="h2">Count:{count}</h1>
//             <button
//               className="btn btn-success"
//               onClick={() => setCount(count + 1)}
//             >
//               +
//             </button>
//           </div>
//           {/* <Memo data={data} /> */}
//           <Callback data={data} deleteItem={deleteItem} />
//         </div>
//       )}
//     </>
//   );
// }
//! Memo ** useCallback________________________end
//! useRef________________________start
function App() {
  return (
    <div className="container">
      <h1 className="text-center">useRef</h1>
      <form>
        <input type="text" className="form-control" placeholder="Name" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
//! useRef________________________end

export default App;
