import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPizza from "../components/CardPizza";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setPizza(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>No hay pizzas disponibles</p>;

  return (
    <div className="pizza-detail">
      <h2>{pizza.nombre}</h2>
      <CardPizza pizza={pizza} />
    </div>
  );
};

export default Pizza;