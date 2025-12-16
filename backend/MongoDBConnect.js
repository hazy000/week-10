mongoose = require("mongoose");

const MONG_URI = "mongodb://localhost:27017/BooksData";

async function connectDB() {
  await mongoose.connect(MONG_URI);
  console.log("MongoDB Connected");
}

module.exports = connectDB;
