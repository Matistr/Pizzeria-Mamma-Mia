import { formatCLP } from "../utils/formatNumber";
import "../css/cardpizza.css";
import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients = [], img }) => {
  return (
    <div className="card card-pizza shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text mb-1">
          <span className="fw-semibold">Ingredientes:</span>
        </p>
        <ul className="mb-3">
          {Array.isArray(ingredients) &&
            ingredients.map((ing) => <li key={ing}>{ing}</li>)}
        </ul>

        <p className="fs-5 fw-bold text-danger mb-3">
          ${formatCLP(price)}
        </p>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary w-100">Ver más</button>
          <button className="btn btn-primary w-100">Añadir</button>
        </div>
      </div>
    </div>
  );
};
CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string.isRequired,
};

export default CardPizza;