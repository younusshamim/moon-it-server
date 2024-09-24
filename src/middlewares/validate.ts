import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import baseResponseHandler from "../utils/baseResponseHandler";

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path.join(".")] = curr.message;
          return acc;
        }, {} as Record<string, string>);
        baseResponseHandler(
          res,
          null,
          "Validation failed",
          400,
          "error",
          validationErrors
        );
      } else {
        next(error);
      }
    }
  };
