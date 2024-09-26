import mongoose from "mongoose";
import env from "../configs/environment";
import logger from "../logger";

const connectDB = async (): Promise<void> => {
  const connectOptions: mongoose.ConnectOptions = {
    autoIndex: true,
  };

  try {
    await mongoose.connect(env.MONGODB_CONNECTION, connectOptions);
    logger.info("Database Connected");
  } catch (err) {
    logger.error("Database connection error:", err);
    throw err;
  }
};

export default connectDB;
