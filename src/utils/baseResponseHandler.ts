import { Response } from "express";
import { BaseResponseModel } from "../models/base.model";

const baseResponseHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  data: T | null = null,
  message: string = "Operation successful",
  code: number = 200,
  status: "success" | "error" = "success",
  validationErrors: Record<string, string> = {},
  stack?: string
): void => {
  const response: BaseResponseModel<T> = {
    data,
    status,
    message,
    code,
    validationErrors,
    stack:
      process.env.NODE_ENV === "production" ? undefined : new Error().stack,
  };
  res.status(code).json(response);
};

export default baseResponseHandler;
