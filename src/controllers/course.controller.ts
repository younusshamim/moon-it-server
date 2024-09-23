import { Request, Response } from "express";
import { BaseResponseModel } from "../models/base.model";
import { CourseSearchModel } from "../models/course.model/course-search.model";
import { CourseModel } from "../models/course.model/course.model";
import { SeminarModel } from "../models/seminar.model";
import { Course } from "../schemas/course.schema";
import { Seminar } from "../schemas/seminar.schema";
import { getDepartmentsOptions } from "../services/department.service";
import getSchemaDefaultValues from "../utils/get-schema-default-values";
import getSearchModelData from "../utils/getSearchModelData";
import { errorHandler, successHandler } from "../utils/response-handler";

export const getSearchData = async (
  req: Request,
  res: Response<BaseResponseModel<CourseSearchModel | null>>
): Promise<void> => {
  try {
    const departmentOptions = await getDepartmentsOptions();
    const data = getSearchModelData({
      departmentId: 0,
      name: "",
      availableDepartments: departmentOptions,
    });
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getListData = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const data = await Seminar.find();
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getCreateData = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const defaultValues = getSchemaDefaultValues<CourseModel>(Course.schema);
    defaultValues.regularDiscount = { type: "", value: 0, endDate: new Date() };
    defaultValues.variants = [
      {
        name: "",
        regularFee: 0,
        regularDiscount: { type: "", value: 0, endDate: new Date() },
      },
    ];
    defaultValues.features = [{ title: "", description: "", iconUrl: "" }];

    const data = await Seminar.find();
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onCreate = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const data = await Seminar.find();
    successHandler(res, data, "Created Successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getEditData = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const data = await Seminar.find();
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onEdit = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const data = await Seminar.find();
    successHandler(res, data, "Updated Successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onDelete = async (
  req: Request,
  res: Response<BaseResponseModel<SeminarModel[] | null>>
): Promise<void> => {
  try {
    const data = await Seminar.find();
    successHandler(res, data, "Deleted successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};
