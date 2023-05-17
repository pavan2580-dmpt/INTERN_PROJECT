const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
    carNO: String,
    Model: String,
    company: String,
    imagePath: String,
    NoKM:String
  });
  
  module.exports = new mongoose.model("carRegister",FormDataSchema)