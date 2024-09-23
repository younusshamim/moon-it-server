import { Request, Response } from "express";
import { BaseResponseModel } from "../models/base.model";
import { DepartmentListModel } from "../models/department.model/department-list.model";
import { DepartmentSearchModel } from "../models/department.model/department-search.model";
import { DepartmentModel } from "../models/department.model/department.model";
import { Department } from "../schemas/department.schema";
import {
  createDepartment,
  deleteDepartment,
  editDepartment,
  getDepartmentById,
  getDepartments,
} from "../services/department.service";
import getSchemaDefaultValues from "../utils/get-schema-default-values";
import getSearchModelData from "../utils/getSearchModelData";
import { errorHandler, successHandler } from "../utils/response-handler";

export const getSearchData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentSearchModel>>
): Promise<void> => {
  try {
    const data = getSearchModelData({
      name: "",
    });
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getListData = async (
  req: Request<DepartmentSearchModel>,
  res: Response<BaseResponseModel<DepartmentListModel>>
): Promise<void> => {
  try {
    const data = await getDepartments(req);
    successHandler(res, { ...data });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getCreateData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>
): Promise<void> => {
  try {
    const defaultValues = getSchemaDefaultValues<DepartmentModel>(
      Department.schema
    );
    successHandler(res, defaultValues);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onCreate = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>
): Promise<void> => {
  try {
    const data = await createDepartment(req.body);
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const getEditData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>
): Promise<void> => {
  try {
    const data = await getDepartmentById(req.params.id);
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onEdit = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>
): Promise<void> => {
  try {
    const data = await editDepartment(req.body);
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};

export const onDelete = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>
): Promise<void> => {
  try {
    const data = await deleteDepartment(req.params.id);
    successHandler(res, data);
  } catch (error) {
    errorHandler(res, error);
  }
};
