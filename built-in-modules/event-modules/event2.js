const PizzaShop = require("./pizzaShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, toppings) => {
    console.log(`Making ${size} Pizza with ${toppings} toppings`);
});

pizzaShop.order("Medium", "Onions");
pizzaShop.order("Extra Large", "Pepperoni");
pizzaShop.order("Large", "Mashrooms");
pizzaShop.order("Small", "Extra-cheese");

pizzaShop.displayOrderNumber();
