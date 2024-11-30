import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import meal1 from "../../assets/meal2.jpg"; // Import your images here
import meal2 from "../../assets/meal1.jpg"; // Import your images here
import meal3 from "../../assets/meal3.jpg"; // Import your images here
import meal4 from "../../assets/meal4.jpg"; // Import your images here
import meal5 from "../../assets/meal5.jpg"; // Import your images here
import meal6 from "../../assets/meal6.jpg"; // Import your images here
import meal7 from "../../assets/meal7.jpg"; // Import your images here
import meal8 from "../../assets/meal8.jpg"; // Import your images here
import meal9 from "../../assets/meal9.jpg"; // Import your images here
import meal10 from "../../assets/meal10.jpg"; // Import your images here
import meal11 from "../../assets/meal11.jpg"; // Import your images here
import meal12 from "../../assets/meal12.jpg"; // Import your images here
import meal13 from "../../assets/meal13.jpg"; // Import your images here

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza Margherita",
    description:
      "Pizza Margherita or Margherita pizza is a typical Neapolitan pizza, roundish in shape with a raised edge and garnished with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil.",
    price: 1,
    image: meal1,
  },
  {
    id: "m2",
    name: "Neapolitan Pizza",
    description:
      "Neapolitan pizza is the version of the round pizza typically prepared in the Italian city of Naples and characterised by a soft, thin dough with high edges..",
    price: 299, // Adjust the price accordingly
    image: meal2,
  },
  {
    id: "m3",
    name: "Greek Pizza",
    description:
      "In the cuisine of the United States, Greek pizza is a style of pizza crust and preparation where the pizza is proofed and cooked in a metal pan rather than stretched to order and",
    price: 299, // Adjust the price accordingly
    image: meal3,
  },
  {
    id: "m4",
    name: "Italian Pizza",
    description:
      "An Italian pizza refers to the one that's cooked in a very hot oven and features a thin crust and simple flavors. It is the most common type ...",
    price: 349,
    image: meal4,
  },
  {
    id: "m5",
    name: "BBQ Chicken Pizza",
    description:
      "This BBQ chicken pizza has spicy barbecue sauce, diced chicken, peppers, onion, and cilantro, all covered with cheese and baked to bubbly goodness! .",
    price: 399,
    image: meal5,
  },
  {
    id: "m6",
    name: " Pepperoni Pizza",
    description:
      "Pepperoni pizza is one of the most popular types of pizza because of its combination of spicy, smoky, and savory flavors, along with its satisfying texture. In fact, according to a survey, 82% of people surveyed say they love or like pepperoni pizza..",
    price: 399,
    image: meal6,
  },
  {
    id: "m7",
    name: "Sicilian pizza",
    description:
      "Our peppy paneer pizza Domino's is loaded with chunky paneer pieces, spiced red pepper, cheese, and crispy capsicum as toppings.",
    price: 449,
    image: meal7,
  },
  {
    id: "m8",
    name: " Veggie Pizza",
    description:
      "When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.",
    price: 449,
    image: meal8,
  },
  {
    id: "m9",
    name: "Bagel pizza",
    description:
      " A bagel pizza is generally a bagel baked with pizza toppings. They look like small pizzas that are ideal for lunch, snacks, or even dinner.",
    price: 449,
    image: meal9,
  },
  {
    id: "m10",
    name: "Mushroom pizza",
    description:
      "In this dreamy white pizza, sautéed garlic mushrooms with thyme are everything. This combination brings a ridiculous flavor to this pizza",
    price: 599,
    image: meal10,
  },
  {
    id: "m11",
    name: "Onion Pizza",
    description:
      "This incredible Onion Pizza is simple, delicious, and so comforting. Sweet caramelized onions, fresh thyme, and cheese come together in a delicious and vegetarian pizza recipe.",
    price: 299,
    image: meal11,
  },
  {
    id: "m12",
    name: "Cheese And Corn Pizza",
    description:
      "It is the perfect choice for people who don’t like veggies on their pizza and don’t eat meat. The hot gooey cheese combined with the juicy fresh sweet corn gives the most perfect flavor profile you could hope for",
    price: 699,
    image: meal12,
  },
  {
    id: "m13",
    name: "Peppy Paneer pizza",
    description:
      "Our peppy paneer pizza is loaded with chunky paneer pieces, spiced red pepper, cheese, and crispy capsicum as toppings",
    price: 799,
    image: meal13,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      name={meal.name}
      key={meal.id}
      id={meal.id}
      price={meal.price}
      description={meal.description}
      image={meal.image}
    />
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
}

export default AvailableMeals;
