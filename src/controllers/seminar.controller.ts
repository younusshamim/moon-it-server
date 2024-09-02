import { Request, Response } from "express";
import { getSeminarsService } from "../services/seminar.service";

export const getSeminarsController = (req: Request, res: Response) => {
  getSeminarsService(req, res);
};
