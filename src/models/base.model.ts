export interface BaseResponseModel<T = null> {
  data: T | null;
  status: "success" | "error";
  message: string;
  code: number;
  validationErrors: Record<string, ValidationErrorDetail>;
  stack?: string;
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

export interface ValidatorErrorProperties {
  message: string;
  type: string;
  path: string;
}

export interface ValidationErrorDetail {
  name: string;
  message: string;
  properties: ValidatorErrorProperties;
  kind: string;
  path: string;
}
