import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});
router.post("/create", (req, res) => {
  res.send("Signin Students");
});
router.put("/update", (req, res) => {
  res.send("Update Students");
});
router.delete("/delete", (req, res) => {
  res.send("Delete Students");
});

export default router;
