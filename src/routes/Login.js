import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setUser }) {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  function formHandler(e) {
    e.preventDefault();
    if (!name || !pwd) return;
    setUser(name);
    navigate("/dashboard");
  }
  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
