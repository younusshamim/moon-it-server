import express from "express";
import departmentRoutes from "./department.route";
import homeRoute from "./home.route";
import seminarRoutes from "./seminar.route";

const router = express.Router();

router.use("/", homeRoute);
router.use("/seminar", seminarRoutes);
router.use("/department", departmentRoutes);

export default router;
