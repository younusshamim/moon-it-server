export interface BaseModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseResponseModel<T = null> {
  data: T | null;
  status: "success" | "error";
  message: string;
  code: number;
}
