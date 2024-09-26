import { Request } from "express";
import { searchModelCommonData } from "../configs/search-model";
import { SelectOption } from "../models/base.model";
import {
  DepartmentListModel,
  DepartmentModel,
  DepartmentSearchModel,
} from "../models/department.model";
import { Department, DepartmentDto } from "../schemas/department.schema";
import getOptions from "../utils/getOptions";

async function createDepartment(department: DepartmentDto) {
  return await Department.create(department);
}

async function getDepartments(
  req: Request<any, any, DepartmentSearchModel>
): Promise<DepartmentListModel> {
  const {
    page = searchModelCommonData.page,
    pageSize = searchModelCommonData.pageSize,
    name = "",
  } = req.body;
  const filter = { name: { $regex: name, $options: "i" } };

  const [data, recordsTotal] = await Promise.all([
    Department.find(filter)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ displayOrder: 1, name: 1 }),
    Department.countDocuments(filter),
  ]);

  return {
    data,
    recordsTotal,
  };
}

async function getDepartmentsOptions(): Promise<SelectOption[]> {
  const data = await Department.find({ isActive: true }, { _id: 1, name: 1 });
  return getOptions(data);
}

async function getDepartmentById(id: string): Promise<DepartmentModel | null> {
  return await Department.findById(id);
}

async function editDepartment(
  department: DepartmentModel
): Promise<DepartmentModel | null> {
  return await Department.findByIdAndUpdate(department._id, department);
}

async function deleteDepartment(id: string): Promise<DepartmentModel | null> {
  return await Department.findByIdAndDelete(id);
}

export default {
  createDepartment,
  getDepartments,
  getDepartmentsOptions,
  getDepartmentById,
  editDepartment,
  deleteDepartment,
};
