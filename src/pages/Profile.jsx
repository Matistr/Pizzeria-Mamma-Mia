import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2>Perfil</h2>
      <p>Email: {email || "No autenticado"}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}