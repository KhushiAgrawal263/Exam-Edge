const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const QuestionSchema = new mongoose.Schema(
  {
    subject:{
        type:String
    },
    question:{
        type:String
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    },
    answer:{
            type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
