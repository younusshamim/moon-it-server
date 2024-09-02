import express from "express";
import homeRoute from "./home.route";
import seminarRoutes from "./seminar.route";

const router = express.Router();

router.use("/", homeRoute);
router.use("/seminar", seminarRoutes);

export default router;
