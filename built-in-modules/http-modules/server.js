const http = require("http");
const fs = require("fs");
const { Navbar, getFooter, Link } = require("./Components");

const home = fs
  .readFileSync("./pages/Home.html", "utf-8")
  .replace("{{link}}", Link)
  .replace("{{navbar}}", Navbar)
  .replace("{{footer}}", getFooter("Company New"));
const about = fs
  .readFileSync("./pages/About.html", "utf-8")
  .replace("{{link}}", Link)
  .replace("{{navbar}}", Navbar)
  .replace("{{footer}}", getFooter("Company New New-2"));
const contact = fs
  .readFileSync("./pages/Contact.html", "utf-8")
  .replace("{{link}}", Link)
  .replace("{{navbar}}", Navbar)
  .replace("{{footer}}", getFooter("Company New New-3"));
const notFound = fs
  .readFileSync("./pages/NotFound.html", "utf-8")
  .replace("{{link}}", Link)
  .replace("{{navbar}}", Navbar)
  .replace("{{footer}}", getFooter("Company Old"));

const server = http.createServer((req, res) => {
  console.log("req.url", req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(home);
  } else if (req.url === "/Home.css") {
    res.writeHead(200, { "content-type": "text/css" });
    fs.ReadStream("./pages/Home.css").pipe(res);
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
