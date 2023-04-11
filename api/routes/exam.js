const router = require("express").Router();
const Student = require("../models/Student");
const Questions = require("../models/Questions");
const jwt = require("jsonwebtoken");
const verify = require("../verifytoken");

router.put('/',verify,async(req,res)=>{
  console.log(req.body.final,req.body.cr);
    try {
      const student = await Student.findById(
        req.student
      );
          
      
      res.status(201).json({
        updatedStudent
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })

  // router.put('/:sub',verify,async(req,res)=>{
  //     try {
  //       const student = await Student.find(
  //         {id:req.student,"marks":sub}
  //       );
            
  //       console.log(student);
  //       res.status(201).json({
  //         updatedStudent
  //       });
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   })

router.get("/:sub",async(req,res)=>{
  try {
    const questions = await Questions.find({subject: req.params.sub});
    console.log(questions);
    // res.status(201).json({
    //   questions
    // });
    res.send(questions);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;