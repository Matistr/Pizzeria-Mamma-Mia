import { NavLink } from "react-router-dom";
import "./../css/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          🛒 Total: $xxx
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;