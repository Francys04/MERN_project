import express from "express";

const allStudents = (req, res) => {
  res.send("All Students");
};

const newStudents = (req, res) => {
  res.send("Create Students");
};

const updateStudents = (req, res) => {
  res.send("Update Students");
};

const deleteStudents = (req, res) => {
  res.send("Delete Students");
};

export { allStudents, updateStudents, deleteStudents, newStudents };
