export interface BaseResponseModel<T = null> {
  data: T | null;
  status: "success" | "error";
  message: string;
  code: number;
}

export interface BasePageListModel<T> extends BaseListModel<T> {
  recordsTotal: number;
}

export interface BaseSearchModel {
  page: number;
  pageSize: number;
  availablePageSizes: string[];
  draw: string;
  start: number;
  length: number;
}

// -------------------------------------------

export interface BaseModel {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface BaseListModel<T> {
  data: T[];
}

export interface SelectOption {
  label: string;
  value: string | number;
}
