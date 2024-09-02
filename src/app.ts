import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import routes from "./routes";

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

// API routes
app.use("/api", routes);

export default app;
