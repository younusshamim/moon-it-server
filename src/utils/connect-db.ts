import mongoose from "mongoose";
import envConfig from "../configs/env.config";

const connectDB = () => {
  const connectOptions = {
    autoIndex: true,
  } as mongoose.ConnectOptions;

  mongoose
    .connect(envConfig.MONGODB_CONNECTION, connectOptions)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

export default connectDB;
