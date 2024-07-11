const mongoose = require("mongoose");
const validator=require("validator")

const quoteSchema = new mongoose.Schema({

  name: {
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
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
  city:{ 
    type:String,
    required:true

  },
  date:{
    type:Date,
    default:Date.now
  },
  requirement:{
    type:String,
    required:true
  }
});
const quoteModel = mongoose.model("quote", quoteSchema);
module.exports = quoteModel;
