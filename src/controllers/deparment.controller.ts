import { NextFunction, Request, Response } from "express";
import message from "../configs/message";
import { Department } from "../schemas/department.schema";
import departmentService from "../services/department.service";
import baseResponseHandler from "../utils/baseResponseHandler";
import getSchemaDefaultValues from "../utils/getSchemaDefaultValues";
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
    baseResponseHandler(res, data, message.success.getSearch);
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
    baseResponseHandler(res, data, message.success.getList);
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
    baseResponseHandler(res, defaultValues, message.success.getCreate);
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
    baseResponseHandler(res, data, message.success.create, 201);
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
    baseResponseHandler(res, data, message.success.getEdit);
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
    baseResponseHandler(res, data, message.success.edit);
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
    baseResponseHandler(res, data, message.success.delete);
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
