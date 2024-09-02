import { Request, Response } from "express";

export const getSeminars = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).send("List of seminars");
};
