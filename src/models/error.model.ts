import { BaseResponseModel } from "./base.model";

interface ErrorModel extends BaseResponseModel {
  stack?: string;
}

export default ErrorModel;
