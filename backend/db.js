//backend db.js

const mongoose = require("mongoose");


//mongoose connection

mongoose.connect("mongodb://localhost:27017/paybank", { useNewUrlParser: true, useUnifiedTopology: true });

//create schema for users
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

//create model for users

const User = mongoose.model("User", userSchema);

module.exports ={ User };