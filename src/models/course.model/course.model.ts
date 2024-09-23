import { Types } from "mongoose";
import { BaseModel } from "../base.model";

export interface CourseModel extends BaseModel {
  departmentId: Types.ObjectId;
  name: string;
  title?: string;
  description1?: string;
  description2?: string;
  imageUrl?: string;
  regularFee: number;
  regularDiscount?: {
    type?: string;
    value?: number;
    endDate?: Date;
  };
  variants?: Array<{
    name?: string;
    regularFee?: number;
    regularDiscount?: {
      type?: string;
      value?: number;
      endDate?: Date;
    };
  }>;
  features?: Array<{
    title?: string;
    description?: string;
    iconUrl?: string;
  }>;
  displayOrder?: number;
  isActive: boolean;
}
