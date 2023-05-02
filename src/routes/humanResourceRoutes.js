import { Router } from "express";
import {
  UpdateDesignation,
  createDesignation,
  deleteDesignation,
  getAllDesignation,
} from "../controllers/humanResource/degignationControllers.js";
import {
  UpdateDepartment,
  createDepartment,
  deleteDepartment,
  getAllDepartment,
} from "../controllers/humanResource/departmentControllers.js";
import {
  UpdateLeaveType,
  createLeaveType,
  deleteLeaveType,
  getAllLeaveType,
} from "../controllers/humanResource/leaveTypeControllers.js";
import {
  UpdateStaffAttendance,
  createStaffAttendance,
  deleteStaffAttendance,
  getAllStaffAttendance,
} from "../controllers/humanResource/staffAttendanceControllers.js";
import {
  UpdateStaff,
  createStaff,
  deleteStaff,
  getAllStaff,
} from "../controllers/humanResource/staffControllers.js";
const router = Router();

/* designation */
router.post("/designation", createDesignation);
router.delete("/designation/:id", deleteDesignation);
router.patch("/designation/:id", UpdateDesignation);
router.get("/designation", getAllDesignation);
/* End */
/* department */
router.post("/department", createDepartment);
router.delete("/department/:id", deleteDepartment);
router.patch("/department/:id", UpdateDepartment);
router.get("/department", getAllDepartment);
/* End */
/* leave-type */
router.post("/leave-type", createLeaveType);
router.delete("/leave-type/:id", deleteLeaveType);
router.patch("/leave-type/:id", UpdateLeaveType);
router.get("/leave-type", getAllLeaveType);
/* End */
/* staff-attendance */
router.post("/staff-attendance", createStaffAttendance);
router.delete("/staff-attendance/:id", deleteStaffAttendance);
router.patch("/staff-attendance/:id", UpdateStaffAttendance);
router.get("/staff-attendance", getAllStaffAttendance);
/* End */
/* staff */
router.post("/staff", createStaff);
router.delete("/staff/:id", deleteStaff);
router.patch("/staff/:id", UpdateStaff);
router.get("/staff", getAllStaff);
/* End */
export default router;
