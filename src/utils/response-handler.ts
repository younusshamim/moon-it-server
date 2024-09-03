import { Response } from "express";
import { BaseResponseModel, HandleResponseOptions } from "../models/base.model";

export const responseHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  options: HandleResponseOptions<T>,
  error?: any
): void => {
  const code = options.code || (options.status === "error" ? 500 : 200);
  const message = options.message || (error ? error.message : "Success");
  const data = options.status === "error" ? null : options.data ?? null;

  const response: BaseResponseModel<T> = {
    data,
    status: options.status,
    message,
    code,
  };
  res.status(code).json(response);
};
