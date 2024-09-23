import { BaseModel } from "../base.model";

export interface DepartmentModel extends BaseModel {
  name: string;
  banglaName: string;
  iconUrl: string;
  description?: string;
  displayOrder?: number;
  isActive?: boolean;
}
