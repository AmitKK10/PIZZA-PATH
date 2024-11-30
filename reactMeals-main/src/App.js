import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import ContactForm from "./components/ContactSection/ContactForm";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

import PizzaCustomization from './components/PizzaCustomization/PizzaCustomization';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

{/*

      <SearchIcon/>

      
<PizzaCustomization/>
      

      */}

<Meals />


      <compo></compo>
      <ContactForm></ContactForm>
      <RestaurantDetails></RestaurantDetails>
    </CartProvider>
  );

}

export default App;
