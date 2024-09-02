import { Request, Response } from "express";

export const getSeminarsService = async (
  _req: Request,
  res: Response
): Promise<void> => {
  res.status(200).send("List of seminars");
};
