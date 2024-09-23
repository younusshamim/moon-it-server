import express from "express";
import {
  getCreateData,
  getEditData,
  getListData,
  getSearchData,
  onCreate,
  onDelete,
  onEdit,
} from "../controllers/course.controller";

const router = express.Router();

router.get("/list", getSearchData);
router.post("/list", getListData);

router.get("/create", getCreateData);
router.post("/create", onCreate);

router.get("/edit/:id", getEditData);
router.put("/edit", onEdit);

router.delete("/delete/:id", onDelete);

export default router;
