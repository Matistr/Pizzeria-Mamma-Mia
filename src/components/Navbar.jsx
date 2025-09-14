import { Link } from "react-router-dom";
import "./../css/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/profile">Perfil</Link>
      </li>
      <li>
        <Link to="/cart">
          🛒 Total: $xxx
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;