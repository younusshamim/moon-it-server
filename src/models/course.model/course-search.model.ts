import { BaseSearchModel } from "../base.model";

export interface CourseSearchModel extends BaseSearchModel {
  departmentId: number;
  name: string;
}
