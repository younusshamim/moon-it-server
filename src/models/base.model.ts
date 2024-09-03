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

export interface HandleResponseOptions<T = null> {
  status: "success" | "error";
  data?: T | null;
  message?: string;
  code?: number;
}
