const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error("❌ MongoDB connection failed:", err.message);
      process.exit(1); // Exit the app if DB connection fails
    }
  };
  
module.exports = connectDB;
