import { DepartmentDto } from "../schemas/zod/department.validation";
import { BaseModel, BasePageListModel, BaseSearchModel } from "./base.model";

export interface DepartmentModel extends BaseModel, DepartmentDto {}

export interface DepartmentSearchModel extends BaseSearchModel {
  name: string;
}

export interface DepartmentListModel
  extends BasePageListModel<DepartmentModel[]> {}
