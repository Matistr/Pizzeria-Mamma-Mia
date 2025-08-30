import { formatCLP } from "../utils/formatNumber";
import "../css/cardpizza.css";
import PropTypes from "prop-types";

const CardPizza = ({ pizza }) => (
  <div className="card-pizza shadow-sm">
    <img src={pizza.img} alt={pizza.name} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title fw-bold">{pizza.name}</h3>
      <p className="card-text mb-1">
        <span className="fw-semibold">Ingredientes:</span>
      </p>
      <ul className="mb-3">
        {pizza.ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <p className="fs-5 fw-bold text-danger mb-3">
        ${formatCLP(pizza.price)}
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
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default CardPizza;