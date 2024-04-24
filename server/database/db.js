import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("error in ConnectMongoDB:", error.message);
  }
};

export default ConnectMongoDB;
