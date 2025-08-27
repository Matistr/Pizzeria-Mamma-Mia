import { pizzas } from "../pizzas";
import CardPizza from "./CardPizza";

const Home = () => (
  <div className="home-container">
    <h2>Nuestras Pizzas</h2>
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  </div>
);

export default Home;