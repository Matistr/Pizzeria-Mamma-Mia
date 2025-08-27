import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const disminuir = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter(item => item.cantidad > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.nombre} width={80} />
              <div>
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button onClick={() => disminuir(item.id)}>-</button>
                <button onClick={() => aumentar(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button>Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;