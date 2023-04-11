const router = require("express").Router();
const Question = require("../models/Questions");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../verifytoken");
const fs = require("fs");

//CREATE
// router.post("/", async (req, res) => {
//       const newQuestion = new Question(req.body);
//       try {
//         const savedQuestion = await newQuestion.save();
//         res.status(201).json(savedQuestion);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//   });
// router.post("/", async (req, res) => {
//   const newQuestion = new Question(req.body);
//   try {
//     const savedQuestion = await newQuestion.save();
//     res.status(201).json(savedQuestion);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.post("/", async (req, res) => {
  console.log("lllllllllllllllllllllllSll");
  console.log(req.body.file);
  console.log(__dirname);
  const data = JSON.parse(fs.readFileSync(`${__dirname}/${req.body.file}`, 'utf-8'));
  try {
        const x = await Question.create(data);
        console.log(x);
        console.log('data successfully imported');
        // to exit the process
        process.exit()
      } catch (error) {
        console.log('error', error)
      }
  // data.forEach(element => {
  //   console.log(element);
    // const newQuestion = new Question(obj);
    // console.log(newQuestion);
    // try {
    //   console.log("before");
    //   // const savedQuestion = await newQuestion.save();
    //   console.log(savedQuestion);
    //   console.log("after");
    //   // console.log('data successfully imported')
    //   // console.log(savedQuestion);
    //   // res.setHeader('Content-Type', 'application/json');
    //   // res.status(201).json(savedQuestion);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  // });
});
// const importData = async () => {
//   console.log("ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
//   try {
//     await Questions.create(data)
//     console.log('data successfully imported')
//     // to exit the process
//     process.exit()
//   } catch (error) {
//     console.log('error', error)
//   }
// }

  
// Get All Questions
router.get("/", async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json(questions.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get a question by Id
// router.get("/:id", async (req, res) => {
//   try {
//     const question = await Question.findById(req.params.id);
//     if(question){
//       res.status(200).json(question);
//     }
//     else{
//       res.status(404).json("Question does not exist");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Get a question by Subject
router.get("/:sub", async (req, res) => {
  try {
    console.log("huuuuuuuuuuuu");
    console.log(req.params.sub);
    const question = await Question.find({subject:req.params.sub});
    console.log(question);
    if(question){
      res.status(200).json(question);
    }
    else{
      res.status(404).json("Question does not exist");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id",async (req, res) => {
    try {
      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedQuestion);
    } catch (err) {
      res.status(500).json("Question does not exist");
    }
});

router.put("/:id/:sub",async (req, res) => {
    try {
      const stud = await student.findById(req.params.id);
      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedQuestion);
    } catch (err) {
      res.status(500).json("Question does not exist");
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await Question.findByIdAndDelete(req.params.id);
      res.status(200).json("The question has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete("/delete", async (req, res) => {
  try {
    await Question.deleteMany({});
    res.status(200).json("data deleted successfuly")
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;