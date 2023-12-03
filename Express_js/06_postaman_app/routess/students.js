import express from "express";

// import from controller
import {
  allStudents,
  updateStudents,
  deleteStudents,
  newStudents,
} from "../controllers/students/students.js";

const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudents);
router.put("/update", updateStudents);
router.delete("/delete", deleteStudents);

export default router;
