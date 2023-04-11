const router = require("express").Router();
const Student = require("../models/Student");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../verifytoken");

// Home 
router.get("/",async(req,res)=>{
    try {
        console.log("Welcome to the new exam edge project");
        res.send("Welcome to the new exam edge project");
    } catch (err) {
        res.status(500).json(err);
    }
})

// Register
router.post("/register", async (req, res) => {
    const newStudent = new Student({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      contactNo:req.body.contactNo,
      emailId: req.body.emailId,
      dob: req.body.dob,
      gender:req.body.gender,
      address: req.body.address,
      photo: req.body.photo,
      idProof: req.body.idProof,
      tenthMarks:req.body.tenthMarks,
      twelfthMarks:req.body.twelfthMarks
    });

    try {
      const student = await newStudent.save();
      res.status(201).json(student);
    } catch (err) {
      console.log("Error => ", err);
      res.status(500).json(err);
    }
  });

// For username and password
router.get('/registered',verify,async(req,res)=>{
  try {
    const id =req.student;
    const student =await Student.findOne({id:id});
    res.status(201).json({
      student
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// Login
router.post("/login",async(req,res)=>{
  try {
    console.log(req.body.id,req.body.password);
    const student = await Student.findOne({ id: req.body.id });
    !student && res.status(401).json("Wrong password or username!");

    student.password !== req.body.password &&
      res.status(401).json("Wrong password or username!");
    if(student.password !== req.body.password)
    {
      res.status(401).json("Wrong password or username!");
    }else{
      const accessToken = jwt.sign(
        { id: student._id},
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
      
      const { password, ...info } = student._doc;
  
      res.status(200).json({ ...info, accessToken });
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;