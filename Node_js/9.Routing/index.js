import http from "http";

const server = http.createServer((res, req) => {
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.end("<h2>About section</h2>");
  } else if (req.url === "/contact") {
    res.end("<h2>Contact</h2");
  } else {
    res.end("<h3>page not found</h3>");
  }
});

//home page
//another page

server.listen(8081, () => console.log("server rum"));
