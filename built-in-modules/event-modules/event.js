const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.emit("pizza-order", "extra large", "mozzarella cheese"); // not work

// event Handler
emitter.on("pizza-order", (size, toppings) => {
  console.log(`Start Making ${size} Pizza with ${toppings} toppings.`);
  if (size === "large" || size === "extra large") {
    console.log("free cococola");
  }
});

// events fired
emitter.emit("pizza-order", "large", "papperoni");
emitter.emit("pizza-order", "medium", "capsicum");
