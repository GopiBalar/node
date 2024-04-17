const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urls = url.parse(req.url, true);
  if (urls.pathname === "/default") {
    res.end(`Here is ${urls.query.color} color ${urls.query.catagory}`);
  }
});

server.listen(5000, () => {
  console.log("Server is listning on port 5000!");
});
