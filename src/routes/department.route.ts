import express from "express";
import { getDepartments } from "../controllers/deparment.controller";
const router = express.Router();

router.get("/list", getDepartments);

export default router;
