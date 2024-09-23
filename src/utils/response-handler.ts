import { Response } from "express";
import { BaseResponseModel } from "../models/base.model";

export const successHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  data: T,
  message: string = "Operation successful",
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

export const errorHandler = <T>(
  res: Response<BaseResponseModel<T>>,
  error: any,
  defaultMessage: string = "An unexpected error occurred",
  defaultCode: number = 500
): void => {
  let errorResponse: BaseResponseModel<null> = {
    data: null,
    status: "error",
    message: defaultMessage,
    code: defaultCode,
  };

  if (error instanceof Error) {
    errorResponse.message = error.message || defaultMessage;

    if ("statusCode" in error) {
      errorResponse.code = (error as any).statusCode;
    } else if ("code" in error) {
      errorResponse.code = (error as any).code;
    }
  } else if (typeof error === "string") {
    errorResponse.message = error;
  }

  if (errorResponse.code < 100 || errorResponse.code >= 600) {
    errorResponse.code = defaultCode;
  }

  res.status(errorResponse.code).json(errorResponse as BaseResponseModel<T>);
};
