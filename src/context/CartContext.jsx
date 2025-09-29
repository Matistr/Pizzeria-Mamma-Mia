import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Añadir producto al carrito
  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === pizza.id);
      if (found) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Eliminar producto del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Eliminar completamente un producto
  const deleteFromCart = (pizzaId) => {
    setCart((prev) => prev.filter((item) => item.id !== pizzaId));
  };

  // Calcular total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};