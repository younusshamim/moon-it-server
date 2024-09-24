import { NextFunction, Request, Response } from "express";
import { BaseResponseModel } from "../models/base.model";
import { DepartmentListModel } from "../models/department.model/department-list.model";
import { DepartmentSearchModel } from "../models/department.model/department-search.model";
import { DepartmentModel } from "../models/department.model/department.model";
import { Department } from "../schemas/mongoose/department.schema";
import departmentService from "../services/department.service";
import baseResponseHandler from "../utils/baseResponseHandler";
import getSchemaDefaultValues from "../utils/get-schema-default-values";
import getSearchModelData from "../utils/getSearchModelData";

const getSearchData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentSearchModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const data = getSearchModelData({
      name: "",
    });
    // successHandler(res, data);
  } catch (error) {
    next(error);
  }
};

const getListData = async (
  req: Request<DepartmentSearchModel>,
  res: Response<BaseResponseModel<DepartmentListModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.getDepartments(req);
    // successHandler(res, { ...data });
  } catch (error) {
    next(error);
  }
};

const getCreateData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const defaultValues = getSchemaDefaultValues<DepartmentModel>(
      Department.schema
    );
    // successHandler(res, defaultValues);
  } catch (error) {
    next(error);
  }
};

// const onCreate = async (
//   req: Request,
//   res: Response<BaseResponseModel<DepartmentModel>>,
//   next: NextFunction
// ) => {
//   try {
//     const data = await departmentService.createDepartment(req.body);
// successHandler(res, data);
//   } catch (error) {
//     next(error);
//   }
// };

export const onCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await departmentService.createDepartment(req.body);
    baseResponseHandler(res, data, "Created successfully", 201);
  } catch (error) {
    next(error);
  }
};

// const onCreate = async (
//   req: Request,
//   res: Response<BaseResponseModel<DepartmentModel>>
// ): Promise<void> => {
//   try {
//     const data = await departmentService.createDepartment(req.body);
// successHandler(res, data);
//   } catch (error) {
//     errorHandler(res, error);
//   }
// };

const getEditData = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.getDepartmentById(req.params.id);
    // successHandler(res, data);
  } catch (error) {
    next(error);
  }
};

const onEdit = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.editDepartment(req.body);
    // successHandler(res, data);
  } catch (error) {
    next(error);
  }
};

const onDelete = async (
  req: Request,
  res: Response<BaseResponseModel<DepartmentModel>>,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.deleteDepartment(req.params.id);
    // successHandler(res, data);
  } catch (error) {
    next(error);
  }
};

export default {
  getSearchData,
  getListData,
  getCreateData,
  onCreate,
  getEditData,
  onEdit,
  onDelete,
};
