const mongoose = require("mongoose")
const connectDB = async () => {
  const uri = "mongodb+srv://vineetprajapati2203:2Sx8wuCCcmA9Pt49@testdb.e8l2s.mongodb.net/atlasCloudDB";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Connection Error: ", err);
  }
};

module.exports = connectDB
