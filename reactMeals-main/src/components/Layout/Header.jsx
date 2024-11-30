

import React from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderEllipsisButton from "./HeaderEllipsisButton";
import AppLogo from "../../assets/App_Logo.webp";
import { FaSearch } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-content"]}>
          <div className={classes["app-logo"]}>
            <img src={AppLogo} alt="App Logo" />
          </div>
          <h1 className={classes["app-title"]}>PIZZA PATH</h1>
        </div>
     
        <div className={classes["header-buttons"]}>
          <HeaderEllipsisButton />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>

        
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Delicious meals" />
      </div>
    </>
  );
}

export default Header;




