import { ErrorRequestHandler } from "express";
import baseResponseHandler from "../../utils/baseResponseHandler";

const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  baseResponseHandler(
    res,
    null,
    message,
    statusCode,
    "error",
    error.errors,
    error.stack
  );
};

export default errorHandlerMiddleware;
