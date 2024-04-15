const fs = require("fs");
// const fs = require("fs/promises");

// fs.readFile("./info.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Somthing wrong");
//   }
//   fs.writeFile("./info-backup.txt", data, (err) => {
//     if (err) {
//       console.log("Somthing wrong");
//     }
//     console.log("Successfully");
//   });
// });

// promise  version
// fs.readFile("./info.txt", "utf-8")
//   .then((data) => {
//     fs.writeFile("./info-backup.txt", data, { flag: "a" }).then(() => {
//       console.log("succefuly");
//     });
//   })
//   .catch((err) => {
//     console.log("Somthing wrong");
//   });

// async
// async function backup() {
//   try {
//     const data = await fs.readFile("./info.txt", "utf-8");
//     await fs.writeFile("./info-backup.txt", data);
//     console.log("Successfully");
//     // fs.unlink('./info.txt');
//   } catch (err) {
//     console.log("somthing wrong");
//   }
// }

// backup();

fs.appendFile("./info.txt", "Hello World !", (err) => {
  if (err) {
    console.log("Somthing wrong");
  }
  console.log("Successfully");
});

fs.writeFile("./info.txt", "Hello Guys !", (err) => {
  if (err) {
    console.log("Somthing wrong");
  }
  console.log("Successfully");
});