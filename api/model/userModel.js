const mongoose = require("mongoose");
const validator=require("validator")


const userSchema = new mongoose.Schema({

  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email");
      }
    }
  },
  phone: {
    type:String,
    required:true,
    validate(number){
      if(!validator.isLength(number,10,10)){
        throw new Error("number range should be min and max 10")
      }
    }

  },
  city: {
    type:String,
    required:true

  },
  businessCategory: {
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  }
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
