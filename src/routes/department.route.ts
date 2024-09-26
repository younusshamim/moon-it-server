import express from "express";
import departmentController from "../controllers/deparment.controller";

const router = express.Router();

router
  .route("/list")
  .get(departmentController.getSearchData)
  .post(departmentController.getListData);

router
  .route("/create")
  .get(departmentController.getCreateData)
  .post(departmentController.onCreate);

router
  .route("/edit/:id")
  .get(departmentController.getEditData)
  .put(departmentController.onEdit);

router.delete("/delete/:id", departmentController.onDelete);

export default router;
