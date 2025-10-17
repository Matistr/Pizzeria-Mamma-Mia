import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import formatNumber from "../utils/formatNumber";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, total, clearCart } = useCart();
  const { token } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // <-- nuevo estado

  const handleCheckout = async () => {
    if (!token) {
      setError("Debes iniciar sesión para realizar el pago.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart, total }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Error en el proceso de pago");
      }

      const data = await res.json();
      // muestra mensaje de éxito (usa el mensaje del backend si existe)
      setSuccessMessage(data?.message || "Compra realizada con éxito");
      // limpia el carrito si el contexto lo soporta
      if (typeof clearCart === "function") clearCart();
      // redirigir a perfil después de un breve delay para que el usuario vea el mensaje
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      setError(err.message || "Error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0)
    return <p style={{ textAlign: "center" }}>El carrito está vacío.</p>;

  // compute button label without nested ternary
  let buttonLabel = "Pagar";
  if (loading) {
    buttonLabel = "Procesando...";
  } else if (successMessage) {
    buttonLabel = "Completado";
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.nombre}</strong> - ${formatNumber(item.price)} x {item.quantity}
            <button onClick={() => addToCart(item)} style={{ marginLeft: 8 }}>+</button>
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 4 }}>-</button>
            <button onClick={() => deleteFromCart(item.id)} style={{ marginLeft: 4, color: "red" }}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${formatNumber(total)}</h3>

      <button onClick={handleCheckout} disabled={!token || loading || !!successMessage}>
        {buttonLabel}
      </button>

      {successMessage && <p style={{ color: "green", marginTop: 12 }}>{successMessage}</p>}
      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
    </div>
  );
};

export default Cart;