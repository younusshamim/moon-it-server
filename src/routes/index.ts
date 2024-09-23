import express from "express";
import courseRoutes from "./course.route";
import departmentRoutes from "./department.route";
import homeRoute from "./home.route";

const router = express.Router();

router.use("/", homeRoute);
router.use("/course", courseRoutes);
router.use("/department", departmentRoutes);

export default router;
