import { NextFunction, Request, Response } from "express";
import { Department } from "../schemas/mongoose/department.schema";
import departmentService from "../services/department.service";
import baseResponseHandler from "../utils/baseResponseHandler";
import getSchemaDefaultValues from "../utils/get-schema-default-values";
import getSearchModelData from "../utils/getSearchModelData";

const getSearchData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = getSearchModelData({
      name: "",
    });
    baseResponseHandler(res, data, "Search data fetched successfully");
  } catch (error) {
    next(error);
  }
};

const getListData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.getDepartments(req);
    baseResponseHandler(res, data, "List data fetched successfully");
  } catch (error) {
    next(error);
  }
};

const getCreateData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const defaultValues = getSchemaDefaultValues(Department.schema);
    baseResponseHandler(res, defaultValues, "Create data fetched successfully");
  } catch (error) {
    next(error);
  }
};

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

const getEditData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.getDepartmentById(req.params.id);
    baseResponseHandler(res, data, "Edit data fetched successfully");
  } catch (error) {
    next(error);
  }
};

const onEdit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.editDepartment(req.body);
    baseResponseHandler(res, data, "Updated successfully");
  } catch (error) {
    next(error);
  }
};

const onDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await departmentService.deleteDepartment(req.params.id);
    baseResponseHandler(res, data, "Deleted successfully");
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
