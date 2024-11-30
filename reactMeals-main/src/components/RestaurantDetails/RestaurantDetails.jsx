/*import React, { useState } from "react";
import classes from "./RestaurantDetails.module.css";

const RestaurantDetails = () => {
  const [showAllDetails, setShowAllDetails] = useState(false);

  const toggleDetailsHandler = () => {
    setShowAllDetails(true);
  };

  return (
    <div className={classes.details}>
      <p>
        <strong>Address:</strong> Digha Science City Road, Padima Chandimata Temple, 721428
      </p>
      <p>
        <strong>Location:</strong> Near Padima VSSS Club, Digha
      </p>
      <p>
        <strong>Owner:</strong> Amit Kiran Kar
      </p>
      {!showAllDetails && (
        <button onClick={toggleDetailsHandler}>Read More</button>
      )}
      {showAllDetails && (
        <div>
          <p>
            <strong>Google Map Location:</strong>{" "}
            <a href="https://maps.google.com">Click here</a>
          </p>
          <p>
            <strong>Co-Owner:</strong> Amit Kiran Kar
          </p>
          <p>
            <strong>Landline Number:</strong> +91-3335609266
          </p>
          <p>
            <strong>Email Address:</strong> amitkirankarofficial@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> +91 9563574862
          </p>
          <p>
            <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
*/

import React, { useState } from "react";
import classes from "./RestaurantDetails.module.css";

const RestaurantDetails = () => {
  const [showAllDetails, setShowAllDetails] = useState(false);

  const toggleDetailsHandler = () => {
    setShowAllDetails((prevState) => !prevState); // Toggle between show/hide
  };

  return (
    <div className={classes.details}>
      <p>
        <strong>Address:</strong> Digha Science City Road, Padima Chandimata Temple, 721428
      </p>
      <p>
        <strong>Location:</strong> Near Padima VSSS Club, Digha
      </p>
      <p>
        <strong>Owner:</strong> Amit Kiran Kar
      </p>
      {!showAllDetails && (
        <button className={classes.button} onClick={toggleDetailsHandler}>
          Read More
        </button>
      )}
      {showAllDetails && (
        <div className={classes.additionalDetails}>
          <p>
            <strong>Google Map Location:</strong>{" "}
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </p>
          <p>
            <strong>Co-Owner:</strong> Amit Kiran Kar
          </p>
          <p>
            <strong>Landline Number:</strong> +91-3335609266
          </p>
          <p>
            <strong>Email Address:</strong> amitkirankarofficial@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> +91 9563574862
          </p>
          <p>
            <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
          </p>
          <button className={classes.button} onClick={toggleDetailsHandler}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
