import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "4rem" }}>
    <h1>404</h1>
    <p>¡Ups! La página que buscas no existe.</p>
    <Link to="/" style={{ color: "#c00", textDecoration: "underline" }}>
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;