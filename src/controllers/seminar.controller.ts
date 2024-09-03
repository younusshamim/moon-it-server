import { Request, Response } from "express";
import { BaseResponseModel } from "../models/base.model";
import { SeminarModel } from "../models/seminar.model";
import { Seminar } from "../schemas/seminar.schema";
import { responseHandler } from "../utils/response-handler";

export const getSeminars = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[]>>
): Promise<void> => {
  try {
    const seminars = await Seminar.find();
    responseHandler(res, {
      data: seminars,
      status: "success",
    });
  } catch (error) {
    responseHandler(
      res,
      {
        status: "error",
        message: "Error retrieving seminars",
      },
      error
    );
  }
};
