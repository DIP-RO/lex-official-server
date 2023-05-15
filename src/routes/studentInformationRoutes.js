// imports
import { Router } from "express";
import {
  UpdateDisableReason,
  createDisableReason,
  deleteDisableReason,
  getAllDisableReasons,
} from "../controllers/StudentInformation/DisableReasonControllers.js";
import {
  UpdateStudentCategories,
  createStudentCategories,
  deleteStudentCategories,
  getAllStudentCategories,
} from "../controllers/StudentInformation/StudentCategoriesControllers.js";
import {
  UpdateStudentHouse,
  createStudentHouse,
  deleteStudentHouse,
  getAllStudentHouse,
} from "../controllers/StudentInformation/StudentHouseControllers.js";
import { authorizedUser } from "../middleware/authentication.js";

// router
const router = Router();
// router.use(authorizedUser)

/* DisableReason */
router.post("/disable-reason", createDisableReason);
router.delete("/disable-reason/:id", deleteDisableReason);
router.patch("/disable-reason/:id", UpdateDisableReason);
router.get("/disable-reason", getAllDisableReasons);
router.get("/disable-reason/:id", getAllDisableReasons);
/* End */

/* student-house */
router.post("/student-house", createStudentHouse);
router.delete("/student-house/:id", deleteStudentHouse);
router.patch("/student-house/:id", UpdateStudentHouse);
router.get("/student-house", getAllStudentHouse);
router.get("/student-house/:id", getAllStudentHouse);
/* End */

/* student-categories */
router.post("/student-categories", createStudentCategories);
router.delete("/student-categories/:id", deleteStudentCategories);
router.patch("/student-categories/:id", UpdateStudentCategories);
router.get("/student-categories", getAllStudentCategories);
router.get("/student-categories/:id", getAllStudentCategories);
/* End */

// exporting
export default router;
