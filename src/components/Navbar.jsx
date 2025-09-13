import { Link } from "react-router-dom";
import { formatCLP } from "../utils/formatNumber";
import "../css/navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">🍕 Mamma Mía</span>

        <div className="d-flex gap-2 ms-auto">
          <button className="btn btn-outline-dark">🏠 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-dark">🔓 Profile</button>
              <button className="btn btn-outline-dark">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-dark">🔐 Login</button>
              <button className="btn btn-outline-dark">🔐 Register</button>
            </>
          )}

          <button className="btn btn-danger">
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
              🛒 Total: {formatCLP(total)}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;