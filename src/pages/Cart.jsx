import { useCart } from "../context/CartContext";
import formatNumber from "../utils/formatNumber";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, total } = useCart();

  if (cart.length === 0)
    return <p style={{ textAlign: "center" }}>El carrito está vacío.</p>;

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
    </div>
  );
};

export default Cart;