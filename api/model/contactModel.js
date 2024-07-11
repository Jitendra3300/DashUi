const mongoose = require("mongoose");
const validator=require("validator")


const contactSchema = new mongoose.Schema({

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
  date:{
    type:Date,
    default:Date.now
  }
});
const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
