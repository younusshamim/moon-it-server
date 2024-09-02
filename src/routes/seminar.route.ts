import express from "express";
import { getSeminarsController } from "../controllers/seminar.controller";
const router = express.Router();

router.get("/list", getSeminarsController);

export default router;
