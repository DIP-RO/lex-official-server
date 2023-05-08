import { Router } from "express";
import {
  createStudentAttendance,
  getAllStudentAttendance,
} from "../controllers/attendance/studentAttendanceControllers.js";
import {
  UpdateLeave,
  createLeave,
  deleteLeave,
  getAllLeave,
} from "../controllers/attendance/leaveControllers.js";
const router = Router();
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
