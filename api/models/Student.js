const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const StudentSchema = new mongoose.Schema(
  {
    firstname:{type:String,required:true},
    lastname : {type:String,required:true},
    dob:{type:String},
    address:{type:String},
    photo:{type:String},
    idProof : {type:String},
    gender:{type:String,required:true},
    contactNo : {type:String,required:true},
    emailId:{type:String,required:true,unique: true},
    tenthMarks:{type:String},
    twelfthMarks:{type:String},
    password: {
      type: String,
      default: function() {
        const max=200;
        const min =100;
        const a = this.firstname.slice(0,3).toUpperCase();
        const b = this.lastname.slice(0,3).toUpperCase();
        const n = Math.floor(Math.random()*(max-min+1)+min);
        return a+b+n;
      }
    },
    id: {
      type: String,
      default: function() {
        const max=20000;
        const min=90000; 
        const a = this.firstname.slice(0,2).toUpperCase();
        const b = this.lastname.slice(0,2).toUpperCase();
        const n = Math.floor(Math.random()*(max-min+1)+min);
        return "EE"+n+a+b;
      }
    },
    accessToken:{type:String},
    marks : {
      Os:{
          type:Number,
          default:0
      },
      Toc:{
        type:Number,
        default:0
      },
      Dbms:{
        type:Number,
        default:0
      },
      Cn:{
        type:Number,
        default:0
      },
      Dsa:
      {
        type:Number,
        default:0
      }

    },
    result:{
      type:Number,default:0
    }
  },
  { timestamps: true }
);

StudentSchema.pre('save',async function(next){

    const accessToken = jwt.sign(
      { id: this.id},
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    this.accessToken = accessToken;
  
 next();
})

module.exports = mongoose.model("Student", StudentSchema);
