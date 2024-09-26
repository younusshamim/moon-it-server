import { Response } from "express";
import { BaseResponseModel, ValidationErrorDetail } from "../models/base.model";

const baseResponseHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  data: T | null = null,
  message: string = "Operation successful",
  code: number = 200,
  status: "success" | "error" = "success",
  validationErrors: Record<string, ValidationErrorDetail> = {},
  stack?: string
): void => {
  const response: BaseResponseModel<T> = {
    data,
    message,
    code,
    status,
    validationErrors,
    stack: process.env.NODE_ENV === "production" ? undefined : stack,
  };
  res.status(code).json(response);
};

export default baseResponseHandler;
