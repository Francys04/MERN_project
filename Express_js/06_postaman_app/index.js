import express from "express";

const app = express();

//ugly code
// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add new students");
// });
// app.put("/student", (req, res) => {
//   res.send("Update Students");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete Students");
// });

// Refactor the code
// app.route()

// app
//   .route("/student")
//   .get((req, res) => res.send("All Students"))
//   .post((req, res) => res.send("Add new students"))
//   .put((req, res) => res.send("Update Students"))
//   .delete((req, res) => res.send("Delete Students"));

//Advance router
// 1. create routes folder and put your routes in separate file
// 2. create instance of express.Router()
// 3. instead of app.method change that to "router.method"
// 4. export router
// 5. import router
// 6. use the (app.use) build-in

// import student from "./routes/student.js";
// import teachers from "./routes/teachers.js";

// app.use("/student", student);

// app.use("/teachers", teachers);

// Route Prameter
// Position in url path
// ecom/products/iphone/:iphoneID(for example: dgsf32)

// app.get("/student/:day/:month/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   res.send(`Product was ordered on :${day}/${month}/${year}`);
// });

// app.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log("This is user ID");
//   res.send("Response OK");
// });

// Controllers

app.listen(8000, () => console.log("Server Running..."));
