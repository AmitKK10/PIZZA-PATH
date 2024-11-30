import React, { useState } from "react";
import classes from "./ContactSection.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputChangeHandler = (event, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form className={classes.contactForm} onSubmit={submitHandler}>
      <h3>Contact Us</h3>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(event) => inputChangeHandler(event, "name")}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) => inputChangeHandler(event, "email")}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(event) => inputChangeHandler(event, "phone")}
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(event) => inputChangeHandler(event, "message")}
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
