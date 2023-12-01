//create server by yourself
import http from "http";

//create server
const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>hello</h1>");
  //   res.statusCode = 200;
  //   res.statusMessage = "bag error";

  res.write(202, "good", { "content-type": "text/html" });
});

server.listen(8000, () => console.log("listening on"));
