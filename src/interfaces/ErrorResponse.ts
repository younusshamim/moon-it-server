import MessageResponse from "./MessageResponse.ts";

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export default ErrorResponse;
