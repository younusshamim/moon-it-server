import { BaseModel } from "./base.model";

export interface SeminarModel extends BaseModel {
  name: String;
  contactNo: String;
  courseId: Number;
  attendPosibility: String;
  address?: String;
}
