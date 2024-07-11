const mongoose = require("mongoose");


const careerSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true

  },
  phone:{
    type:String,
    required:true

  },
  designation:{
    type:String,
    required:true

  },

  date:{
    type:Date,
    default:Date.now()
  }
});
const careerModel = mongoose.model("career", careerSchema);
module.exports = careerModel;
