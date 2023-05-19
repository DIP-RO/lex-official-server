// imports
import { Router } from "express";
import {
  UpdateDisableReason,
  createDisableReason,
  deleteDisableReason,
  getAllDisableReasons,
} from "../controllers/StudentInformation/DisableReasonControllers.js";
import {
  bulkDelete,
  studentDetails,
} from "../controllers/StudentInformation/StudenDetails.js";
import {
  createAdmission,
  onlineAdmission,
} from "../controllers/StudentInformation/StudentAdmissionControllers.js";
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
import { uploadStudentAdmissionFiles } from "../middleware/StudentInformationFile.js";

// router
const router = Router();
// router.use(authorizedUser);

// student information
router.post(
  "/student-admission",
  uploadStudentAdmissionFiles.fields([
    { name: "studentPhoto", maxCount: 1 },
    { name: "fatherPhoto", maxCount: 1 },
    { name: "motherPhoto", maxCount: 1 },
    { name: "guardianPhoto", maxCount: 1 },
    { name: "title_1", maxCount: 1 },
    { name: "title_2", maxCount: 1 },
    { name: "title_3", maxCount: 1 },
    { name: "title_4", maxCount: 1 },
  ]),
  createAdmission
);
router.get("/online-admission", onlineAdmission);
router.get("/student-details", studentDetails);
router.get("/bulk-delete", bulkDelete);

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
