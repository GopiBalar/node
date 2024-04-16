const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./pages/Home.html");
const about = fs.readFileSync("./pages/About.html");
const contact = fs.readFileSync("./pages/Contact.html");
const notFound = fs.readFileSync("./pages/NotFound.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(home);
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(about);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(contact);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(notFound);
  }
});

server.listen(8000, () => {
  console.log("Server is Listening.");
});
