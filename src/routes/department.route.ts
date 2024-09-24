import express from "express";
import departmentController from "../controllers/deparment.controller";
import { validate } from "../middlewares/validate";
import {
  createDepartmentSchema,
  updateDepartmentSchema,
} from "../schemas/zod/department.validation";

const router = express.Router();

router
  .route("/list")
  .get(departmentController.getSearchData)
  .post(departmentController.getListData);

router
  .route("/create")
  .get(departmentController.getCreateData)
  .post(validate(createDepartmentSchema), departmentController.onCreate);

router
  .route("/edit/:id")
  .get(departmentController.getEditData)
  .put(validate(updateDepartmentSchema), departmentController.onEdit);

router.delete("/delete/:id", departmentController.onDelete);

export default router;
