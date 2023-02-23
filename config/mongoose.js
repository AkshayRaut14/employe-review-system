// // const dotenv = require('dotenv').config();
//
// // const mongoose = require('mongoose');
//
// // mongoose.connect(process.env.MONGODB_URL);
// // console.log("mongoose connection");
// // const db = mongoose.connection;
//
// // db.on("error",console.error.bind(console,"Error occur while making mongoose connection"));
//
// // db.once('open',function(){
// //     console.log("Connection success to mongoose .");
// // });
//
// // module.exports = db;
//
// // Import the mongoose module
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
//
// //Set up default mongoose connection
// var mongoDB = process.env.MONGODB_URL;
// // mongoose.set("strictQuery", false);
// module.exports = mongoose
//   .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("CONNECTION ESTABLISHED"));

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://akshay:Akshaycode123@cluster0.x3fxgvw.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error is conecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
