import { BasePageListModel } from "../base.model";
import { DepartmentModel } from "./department.model";

export interface DepartmentListModel
  extends BasePageListModel<DepartmentModel[]> {}
