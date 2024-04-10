const fs = require("fs");

console.log("1");

fs.readFile("./info.txt", "utf-8", (err, data) => {
  console.log("2");

  if (err) {
    console.log("Somthing wrong");
  }
  console.log(data);
});

console.log("3");

const fileContacts = fs.readFileSync("./info.txt", "utf-8");
console.log(fileContacts);

console.log("4");
