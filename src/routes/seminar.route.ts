import express from "express";
import { getSeminars } from "../controllers/seminar.controller";
const router = express.Router();

router.get("/list", getSeminars);

export default router;
