const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var bodyParser = require('body-parser');

const fs = require("fs");
const Questions = require('./models/Questions');

const authRoute = require("./routes/auth");
const studentRoute = require("./routes/student");
const questionRoute = require("./routes/questions");
const examRoute = require("./routes/exam");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

dotenv.config();

const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongodb connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Succesfull"))
  .catch((err) => console.log(err));

// const data = JSON.parse(fs.readFileSync('./DBMS.json', 'utf-8'));
// console.log(data);

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
// importData();
// Use
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/student", studentRoute);
app.use("/api/question", questionRoute);
app.use("/api/exam/",examRoute);

app.listen(PORT, () => {
  console.log("Backend server is running at port 8000!");
});
