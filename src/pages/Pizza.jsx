import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{pizza.nombre}</h2>
      <p>{pizza.descripcion}</p>
      <p>Precio: ${pizza.price}</p>
      {/* Puedes agregar más detalles */}
    </div>
  );
};

export default Pizza;