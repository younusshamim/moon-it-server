import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const addRequestId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = uuidv4();
  (req as any).id = requestId;
  res.setHeader("X-Request-Id", requestId);
  next();
};
