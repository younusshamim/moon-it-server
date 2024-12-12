import { ErrorRequestHandler } from "express";
import messages from "../../configs/messages";
import baseResponseHandler from "../../utils/baseResponseHandler";

const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || messages.error.server;
  baseResponseHandler(
    res,
    null,
    errorMessage,
    statusCode,
    "error",
    error.errors,
    error.stack
  );
};

export default errorHandlerMiddleware;
