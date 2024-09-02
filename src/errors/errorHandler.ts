import { ErrorRequestHandler, NextFunction, Response } from "express";
import envConfig from "../configs/env.config";
import ErrorResponse from "../interfaces/ErrorResponse";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error,
  req,
  res: Response<ErrorResponse>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  res?.status(statusCode).send({
    data: null,
    success: false,
    error: true,
    message: error.message || "Internal Server Error",
    status: statusCode,
    stack: envConfig.NODE_ENV === "production" ? "" : error.stack,
  });
};

export default errorHandlerMiddleware;
