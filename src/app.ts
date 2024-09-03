import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import envConfig from "./configs/env.config";
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middlewares/errors";
import routes from "./routes";
import connectDB from "./utils/connect-db";

// handle unhandled rejection error
import "./middlewares/errors/unhandledRejection";

// Initialize app with express
const app: express.Application | undefined = express();

// Load App Middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);

// Serve all static files inside public directory.
app.use("/static", express.static("public"));

// Routes which Should handle the requests
app.use("/api", routes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Start Server
const startServer = () => {
  app.listen(envConfig.PORT, () => {
    console.log(`Server Running ${envConfig.PORT}`);
  });
};
connectDB(startServer);
