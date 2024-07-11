// getting-started.js
const mongoose = require('mongoose');


async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log("Database is connected sucessfully")
  } catch (error) {
    console.log("Error connecting with database:", error.message)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports=connectDatabase