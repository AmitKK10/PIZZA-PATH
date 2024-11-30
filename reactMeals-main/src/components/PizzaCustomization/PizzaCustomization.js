/*import smallPizzaImage from "../../assets/pizza-small.jpg";
import mediumPizzaImage from "../../assets/pizza-medium.jpg";
import largePizzaImage from "../../assets/pizza-large.jpg";
import regularBaseImage from "../../assets/base-regular.jpg";
import thinBaseImage from "../../assets/base-thin.jpg";
import glutenFreeBaseImage from "../../assets/base-gluten-free.jpg";
import tomatoSauceImage from "../../assets/sauce-tomato.jpg";
import pestoSauceImage from "../../assets/sauce-pesto.jpg";



<div className={classes.size}>
  <h4>Choose Pizza Size:</h4>
  <div className={classes.sizeOptions}>
    <button onClick={() => handleSizeChange("Small")}>
      <img src={smallPizzaImage} alt="Small Pizza" />
      Small
    </button>
    <button onClick={() => handleSizeChange("Medium")}>
      <img src={mediumPizzaImage} alt="Medium Pizza" />
      Medium
    </button>
    <button onClick={() => handleSizeChange("Large")}>
      <img src={largePizzaImage} alt="Large Pizza" />
      Large
    </button>
  </div>
  <p>Price: Rs. {price}</p>
</div>
*/

import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./PizzaCustomization.module.css";

const PizzaCustomization = (props) => {
  const [size, setSize] = useState("Medium");
  const [base, setBase] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");
  const [veggies, setVeggies] = useState([]);
  const basePrice = 100;
  const sizeDifference = size === "Large" ? 20 : size === "Small" ? -20 : 0;

  const totalPrice = basePrice + sizeDifference;

  const toggleVeggie = (veggie) => {
    setVeggies((prev) =>
      prev.includes(veggie)
        ? prev.filter((v) => v !== veggie)
        : [...prev, veggie]
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>Customize Your Pizza</h2>
      <div className={classes.section}>
        <h3>Size</h3>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={classes.select}
        >
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </div>
      <div className={classes.section}>
        <h3>Base</h3>
        <select
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className={classes.select}
        >
          <option value="">Select a base</option>
          <option value="Thin Crust">Thin Crust</option>
          <option value="Thick Crust">Thick Crust</option>
          <option value="Cheese Burst">Cheese Burst</option>
          <option value="Wheat">Wheat</option>
          <option value="Gluten-Free">Gluten-Free</option>
        </select>
      </div>
      <div className={classes.section}>
        <h3>Sauce</h3>
        <select
          value={sauce}
          onChange={(e) => setSauce(e.target.value)}
          className={classes.select}
        >
          <option value="">Select a sauce</option>
          <option value="Tomato">Tomato</option>
          <option value="Barbecue">Barbecue</option>
          <option value="Pesto">Pesto</option>
          <option value="Alfredo">Alfredo</option>
          <option value="Garlic Butter">Garlic Butter</option>
        </select>
      </div>
      <div className={classes.section}>
        <h3>Cheese</h3>
        <select
          value={cheese}
          onChange={(e) => setCheese(e.target.value)}
          className={classes.select}
        >
          <option value="">Select a cheese</option>
          <option value="Mozzarella">Mozzarella</option>
          <option value="Cheddar">Cheddar</option>
          <option value="Parmesan">Parmesan</option>
          <option value="Provolone">Provolone</option>
          <option value="Goat Cheese">Goat Cheese</option>
        </select>
      </div>
      <div className={classes.section}>
        <h3>Veggies</h3>
        <div className={classes.veggies}>
          {["Onions", "Peppers", "Olives", "Mushrooms", "Spinach"].map(
            (veggie) => (
              <label key={veggie} className={classes.checkbox}>
                <input
                  type="checkbox"
                  checked={veggies.includes(veggie)}
                  onChange={() => toggleVeggie(veggie)}
                />
                {veggie}
              </label>
            )
          )}
        </div>
      </div>
      <div className={classes.total}>
        <strong>Total Price: Rs. {totalPrice}</strong>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Confirm Order</button>
      </div>
    </Modal>
  );
};

export default PizzaCustomization;
