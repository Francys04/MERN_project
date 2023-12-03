import express from "express";
import userCredential from "./middlewares/logs.js";

const app = express();

//midlleware take 3 parameters req, res, next
// Authorisation, authetification and more

// how work
//1. Request
//2. Middleware
//3. Response

app.use(userCredential);

app.get("/", (req, res) => {
  res.send("<h2>Hello admin</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Section</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact</h2>");
});

app.listen(8000, () => console.log("Server is Running ..."));
