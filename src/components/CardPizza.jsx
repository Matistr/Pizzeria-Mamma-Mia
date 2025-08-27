import { formatCLP } from "../utils/formatNumber";
import "../css/cardpizza.css";
import PropTypes from "prop-types";

const CardPizza = ({ pizza }) => (
  <div className="card-pizza shadow-sm">
    <img src={pizza.img} alt={pizza.nombre} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title fw-bold">{pizza.nombre}</h3>
      <p className="card-text mb-1">
        <span className="fw-semibold">Ingredientes:</span>
      </p>
      <ul className="mb-3">
        {pizza.ingredientes.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>

      <p className="fs-5 fw-bold text-danger mb-3">
        ${formatCLP(pizza.precio)}
      </p>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary w-100">Ver más</button>
        <button className="btn btn-primary w-100">Añadir</button>
      </div>
    </div>
  </div>
);

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPizza;