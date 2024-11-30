import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const price = `Rs: ${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const addToCarthandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className={classes.container}>
      <div  style={{
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }} className={classes.image}></div>
      <li
        className={classes.meal}
      >
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCarthandler} />
        </div>
      </li>
    </div>
  );
}

export default MealItem;