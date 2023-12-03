import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connection ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
