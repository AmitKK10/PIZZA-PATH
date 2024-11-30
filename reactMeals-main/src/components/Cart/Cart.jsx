import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalAmount = `Rs:${(ctx.totalAmount - discount).toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const applyCouponHandler = () => {
    // Define coupon codes and their corresponding discounts
    const couponCodes = {
      AMIT10: 0.1, // 10% discount
      THALA7: 0.07, // 20% discount
      VIRAT18: 0.18, //18% discount
      SAVE20: 0.2, // 20% discount
      // Add more coupon codes and their discounts as needed
    };

    // Check if the entered coupon is valid
    if (coupon in couponCodes) {
      // Calculate the discount amount based on the coupon code
      const discountPercent = couponCodes[coupon];
      const discountAmount = ctx.totalAmount * discountPercent;
      setDiscount(discountAmount);
    } else {
      // No discount for invalid coupon
      setDiscount(0);
    }
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <p style={
          {textAlign: "center"}
        }>Use Coupon Code "VIRAT18" For Extra 18% Discount</p>
        <div className={classes["coupon-container"]}>
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(event) => setCoupon(event.target.value)}
            className={classes["coupon-input"]}
          />
          <button onClick={applyCouponHandler} className={classes["apply-button"]}>
            Apply
          </button>
        </div>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
