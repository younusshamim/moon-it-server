import mongoose from "mongoose";
import app from "./app";
import envConfig from "./configs/env.config";

export const startServer = () => {
  const connectOptions = {
    autoIndex: true,
  } as mongoose.ConnectOptions;

  mongoose
    .connect(envConfig.MONGODB_CONNECTION, connectOptions)
    .then(() => {
      console.log("Database Connected");
      app?.listen(envConfig.PORT, () => {
        console.log(`Server Running ${envConfig.PORT}`);
      });
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

startServer();
