import { Request, Response } from "express";
import { BaseResponseModel } from "../models/base.model";
import { SeminarModel } from "../models/seminar.model";
import { Seminar } from "../schemas/seminar.schema";
import { errorHandler, successHandler } from "../utils/response-handler";

export const getSeminars = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const seminars = await Seminar.find();
    successHandler(res, seminars, "List of seminars retrieved successfully");
  } catch (error) {
    errorHandler(res, "Error retrieving seminars");
  }
};
