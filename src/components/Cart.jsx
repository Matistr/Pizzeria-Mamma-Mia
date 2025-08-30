import { useState } from "react";
import { pizzaCart } from "../pizzas";
import { formatCLP } from "../utils/formatNumber";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const disminuir = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter(item => item.count > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width={80} />
              <div>
                <h4>{item.name}</h4>
                <p>Precio: ${formatCLP(item.price)}</p>
                <p>Cantidad: {item.count}</p>
                <button onClick={() => disminuir(item.id)}>-</button>
                <button onClick={() => aumentar(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ${formatCLP(total)}</h3>
          <button>Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;