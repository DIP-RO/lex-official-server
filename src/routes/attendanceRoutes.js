import { Router } from "express";
import {
  UpdateLeave,
  createLeave,
  deleteLeave,
  getAllLeave,
} from "../controllers/attendance/leaveControllers.js";
import {
  createStudentAttendance,
  getAllStudentAttendance,
} from "../controllers/attendance/studentAttendanceControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
// router.use(authorizedUser)
/* student-attendance */
router.post("/student-attendance", createStudentAttendance);
router.get("/student-attendance", getAllStudentAttendance);
router.get("/student-attendance/:id", getAllStudentAttendance);
/* End */
/* leave */
router.post("/leave", createLeave);
router.delete("/leave/:id", deleteLeave);
router.patch("/leave/:id", UpdateLeave);
router.get("/leave", getAllLeave);
router.get("/leave/:id", getAllLeave);
/* End */
export default router;
