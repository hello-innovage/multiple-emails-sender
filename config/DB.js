const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI).then((con) => {
      console.log(`Mongo db connect with ${con.connection.host}`);
    });
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit;
  }
};

module.exports = connectDB;
