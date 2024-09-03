import { ErrorRequestHandler, NextFunction, Response } from "express";
import ErrorModel from "../../models/error.model";

const errorHandlerMiddleware: ErrorRequestHandler = (
  error,
  req,
  res: Response<ErrorModel>,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  res?.status(statusCode).send({
    data: null,
    status: "error",
    message: error.message || "Internal Server Error",
    code: statusCode,
    stack: process.env.NODE_ENV === "production" ? "" : error.stack,
  });
};

export default errorHandlerMiddleware;
