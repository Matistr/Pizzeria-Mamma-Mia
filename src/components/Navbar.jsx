import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import formatNumber from "../utils/formatNumber";
import "./../css/navbar.css";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

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
        {token ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;