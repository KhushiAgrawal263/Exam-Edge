const router = require("express").Router();
const Student = require("../models/Student");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../verifytoken");

// Get All Students
router.get("/", async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});

// Delete all students
router.delete("/delete", async (req, res) => {
    try {
      const students = await Student.deleteMany({});
      res.status(200).json("data deleted successfuly")
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get a Student by Id
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id",async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedStudent);
    } catch (err) {
      res.status(500).json("User does not exist");
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.status(200).json("The student has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});



module.exports = router;