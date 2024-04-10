const fs = require("fs");

fs.writeFile("./info.txt", "New contant", { flag: "a" }, (err) => {
  if (err) {
    console.log("Somthing wrong");
  }
  console.log("Successfully");
});

fs.writeFileSync("./info.txt", "New Contant 2", { flag: "a" });
