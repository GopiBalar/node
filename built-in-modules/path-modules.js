const path = require("path");

// console.log("__filename", __filename); // full Path of file
// console.log("__dirname", __dirname); // full directory of folder

// console.log(path.basename(__filename)); // filename
// console.log(path.basename(__dirname)); // foldername

// console.log(path.extname(__filename)); // file extention(.js,.json,etc)
// console.log(path.extname(__dirname)); // folder extention ( empty )

// console.log(path.parse(__filename)); // return object with diffrent property
// console.log(path.format(path.parse(__filename))); // object with diffrent property tranfer full path

// console.log(path.isAbsolute(__filename)); // path ture or false ->true
// console.log(path.isAbsolute("./data.json")); // ->false

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));

// console.log(path.join(__dirname, "../index.html"));

// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve(__dirname, "../index.html"));
