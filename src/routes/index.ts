import express from "express";
import departmentRoutes from "./department.route";
import homeRoute from "./home.route";

const router = express.Router();

router.use("/", homeRoute);
router.use("/department", departmentRoutes);
// router.use("/course", courseRoutes);

export default router;
