import React from "react";
import PizzaItem from "../../components/navbar/pizzaItems/PizzaItem";
import pizzas from "../../pizzasdata";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="">
        {pizzas.map((pizza) => {
          return (
            <div className="">
              <div className="">
                <PizzaItem pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
