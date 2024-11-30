import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite Pizza from our broad selection of available Pizzas
        and enjoy a delicious meal at home.
      </p>
      <p>
        All our Pizzas are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
}

export default MealsSummary;
