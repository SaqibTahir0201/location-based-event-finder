import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.info("Database connected successfully:", connection.connection.name);
  } catch (error) {
    console.error("Error in connectionDb:", error);
  }
};

export default connectDb;