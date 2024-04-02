// const { add, subtract, multiply, divide } = require("./calc");

// const sum = add(2, 3);
// const difference = subtract(3, 3);
// const product = multiply(3, 5);
// const quotient = divide(9, 3);

// console.log("sum", sum);
// console.log("difference", difference);
// console.log("product", product);
// console.log("quotient", quotient);

const fruits = require("./user-modules/fruit");

const fruit1 = new fruits("Apple");
console.log(fruit1.getName());

fruit1.setName("Mango");
console.log(fruit1.getName());

const fruit2 = new fruits("Cherry");
console.log(fruit2.getName());
