import { Response } from "express";
import { BaseResponseModel } from "../models/base.model";

export const errorHandler = (
  res: Response<BaseResponseModel<null>>,
  message: string,
  code: number = 500
): void => {
  const response: BaseResponseModel<null> = {
    data: null,
    status: "error",
    message,
    code,
  };
  res.status(code).json(response);
};

export const successHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  data: T,
  message: string,
  code: number = 200
): void => {
  const response: BaseResponseModel<T> = {
    data,
    status: "success",
    message,
    code,
  };
  res.status(code).json(response);
};
