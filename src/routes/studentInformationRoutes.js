// imports
import { Router } from "express";
import {
  UpdateDisableReason,
  createDisableReason,
  deleteDisableReason,
  getAllDisableReasons,
} from "../controllers/StudentInformation/DisableReasonControllers";
import {
  UpdateStudentHouse,
  createStudentHouse,
  deleteStudentHouse,
  getAllStudentHouse,
} from "../controllers/StudentInformation/StudentHouseControllers";
import {
  UpdateStudentCategories,
  createStudentCategories,
  deleteStudentCategories,
  getAllStudentCategories,
} from "../controllers/StudentInformation/StudentCategoriesControllers";

// router
const router = Router();

/* DisableReason */
router.post("/disable-reason", createDisableReason);
router.delete("/disable-reason/:id", deleteDisableReason);
router.patch("/disable-reason/:id", UpdateDisableReason);
router.get("/disable-reason", getAllDisableReasons);
/* End */

/* student-house */
router.post("/student-house", createStudentHouse);
router.delete("/student-house/:id", deleteStudentHouse);
router.patch("/student-house/:id", UpdateStudentHouse);
router.get("/student-house", getAllStudentHouse);
/* End */

/* student-categories */
router.post("/student-categories", createStudentCategories);
router.delete("/student-categories/:id", deleteStudentCategories);
router.patch("/student-categories/:id", UpdateStudentCategories);
router.get("/student-categories", getAllStudentCategories);
/* End */

// exporting
export default router;