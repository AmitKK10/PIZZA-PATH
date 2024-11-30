import React, { useState } from "react";
import classes from "./HeaderEllipsisButton.module.css";

const HeaderEllipsisButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={classes.menu}>
      <div className={classes.menuIcon} onClick={toggleMenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className={classes.menuItems}>
          <ul>
            <li>Login</li>
            <li>sign Up</li>
            <li>Forget User id/ Password</li>
            <li>Terms & Conditions</li>
            {/* Add more options here if needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderEllipsisButton;