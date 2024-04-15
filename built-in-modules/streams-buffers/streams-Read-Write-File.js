const fs = require("fs");
const zlib = require("zlib");

const zip = zlib.createGzip();

const readAbleStream = fs.createReadStream("./info.txt", {
  flag: "a+",
  encoding: "utf-8",
  highWaterMark: 3,
});

const writeAbleStream = fs.createWriteStream("./back-up.txt");

// readAbleStream.on("data", (chunk) => {
//   writeAbleStream.write(chunk);
//   console.log("chunk", chunk);
// });

readAbleStream.pipe(writeAbleStream);

// readAbleStream.pipe(zip).pipe(fs.WriteStream("./file.txt.gz"));
