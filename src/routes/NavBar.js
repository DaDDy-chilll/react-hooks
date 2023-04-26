import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand navdar-dark bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "blue" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "blue" };
            }}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "blue" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/products"
            className="nav-link"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "blue" };
            }}
          >
            Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="nav-link"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "blue" };
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
