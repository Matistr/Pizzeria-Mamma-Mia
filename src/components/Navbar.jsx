import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import formatNumber from "../utils/formatNumber";
import "./../css/navbar.css";

export default function Navbar() {
  const { token, logout, total = 0 } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
          <NavLink to="/cart">🛒 Total: ${formatNumber(total)}</NavLink>
        </li>
        {token ? (
          <li>
            <button onClick={handleLogout} className="btn-logout">
              Cerrar sesión
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}