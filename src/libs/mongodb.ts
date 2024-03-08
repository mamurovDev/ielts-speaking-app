import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to db succesfully");
  } catch (error) {
    console.log("Failed to connect to db");
  }
};

export default connectMongodb;
