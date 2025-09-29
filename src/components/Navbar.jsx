import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import formatNumber from "../utils/formatNumber";
import "./../css/navbar.css";

const Navbar = () => {
  const { total } = useCart();

  return (
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
            🛒 Total: ${formatNumber(total)}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;