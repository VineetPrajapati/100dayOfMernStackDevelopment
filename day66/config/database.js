const mongooge = require("mongoose");

const connectDB = async () => {
  try {
    await mongooge.connect(`mongodb://localhost:27017/testApp`);
    console.log(`MongoDB connected successfully`);
  } catch (err) {
    console.log(`MongoDB connection error ${err}`);
  }
};

module.exports = connectDB;
