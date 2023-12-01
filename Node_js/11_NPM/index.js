import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "good", { "Content-Type": "text/html" });
  res.write("<h1>Hello world</h1>");
});

server.listen(8000, () => console.log("server run"));
