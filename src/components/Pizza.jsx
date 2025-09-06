import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;
  if (!pizzas.length) return <p>No hay pizzas disponibles.</p>;

  return (
    <div
      className="pizza-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="pizza-detail"
          style={{
            maxWidth: 320,
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <h2 style={{ textTransform: "capitalize" }}>{pizza.name}</h2>
          <img
            src={pizza.img}
            alt={pizza.name}
            style={{
              width: "100%",
              maxWidth: 280,
              borderRadius: 8,
              margin: "1rem 0",
            }}
          />
          <p style={{ fontStyle: "italic", color: "#555" }}>{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <h3 style={{ color: "#c00", margin: "1rem 0" }}>
            Precio: ${pizza.price}
          </h3>
          <button className="btn btn-primary" disabled>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pizza;