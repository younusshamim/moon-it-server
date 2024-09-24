import cookieParser from "cookie-parser";
import cors from "cors";
// import { config } from "dotenv";
import "dotenv/config";
import express, { Application } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { Server } from "http";
import morgan from "morgan";
import env from "./configs/environment";
import logger from "./logger";
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middlewares/errors";
import { addRequestId } from "./middlewares/requestId";
import routes from "./routes";
import connectDB from "./utils/connect-db";

// config();

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logging middleware
app.use(
  morgan("combined", {
    stream: {
      write: (message: string) => {
        logger.info(message.trim());
      },
    },
  })
);
app.use(addRequestId);

// Static files
app.use("/static", express.static("public"));

// Routes
app.use("/api", routes);

// Error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

let server: Server;

// Graceful shutdown function
const gracefulShutdown = (signal: string) => {
  return () => {
    logger.info(`${signal} received. Shutting down gracefully.`);
    if (server) {
      server.close((err?: Error) => {
        if (err) {
          logger.error("Error during server close", err);
          process.exit(1);
        }
        logger.info("HTTP server closed.");
        process.exit(0);
      });

      // Force close after 30 seconds
      setTimeout(() => {
        logger.error(
          "Could not close connections in time, forcefully shutting down"
        );
        process.exit(1);
      }, 30000);
    } else {
      process.exit(0);
    }
  };
};

// Start server
const startServer = async () => {
  try {
    await connectDB();
    server = app.listen(env.PORT, () => {
      logger.info(`Server running on port ${env.PORT}`);
    });

    // Graceful shutdown handlers
    process.on("SIGTERM", gracefulShutdown("SIGTERM"));
    process.on("SIGINT", gracefulShutdown("SIGINT"));
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

// Global error handlers
process.on("unhandledRejection", (reason: Error | any) => {
  logger.error(`Unhandled Rejection: ${reason.message || reason}`);
  // In production, you might want to exit the process here
  // process.exit(1);
});

process.on("uncaughtException", (error: Error) => {
  logger.error(`Uncaught Exception: ${error.message}`);
  // It's generally recommended to exit after an uncaught exception
  process.exit(1);
});

export default app;
