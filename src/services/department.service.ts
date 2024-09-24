import { Request } from "express";
import { searchModelCommonData } from "../configs/search-model";
import { BasePageListModel } from "../models/base.model";
import { DepartmentSearchModel } from "../models/department.model/department-search.model";
import { DepartmentModel } from "../models/department.model/department.model";
import { Department } from "../schemas/mongoose/department.schema";
import getOptions from "../utils/get-options";

async function createDepartment(department: DepartmentModel) {
  return await Department.create(department);
}

async function getDepartments(
  req: Request<any, any, DepartmentSearchModel>
): Promise<BasePageListModel<DepartmentModel[]>> {
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

async function getDepartmentsOptions() {
  const data = await Department.find({ isActive: true }, { _id: 1, name: 1 });
  return getOptions(data);
}

async function getDepartmentById(id: string) {
  return await Department.findById(id);
}

async function editDepartment(department: DepartmentModel) {
  return await Department.findByIdAndUpdate(department._id, department);
}

async function deleteDepartment(id: string) {
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
