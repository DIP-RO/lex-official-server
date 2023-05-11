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
import {
  uploadCreateApplyLeave,
  uploadCreateApproveLeaveRequests,
  uploadStaffFiles,
} from "../middleware/HumanResourceFile.js";
import {
  UpdateApproveLeaveRequest,
  createApproveLeaveRequest,
  deleteApproveLeaveRequest,
  getAllApproveLeaveRequest,
} from "../controllers/humanResource/ApproveLeaveRequestController.js";
import {
  UpdateApplyLeaveModel,
  createApplyLeaveModel,
  deleteApplyLeaveModel,
  getAllApplyLeaveModel,
} from "../controllers/humanResource/ApplyleaveControllers.js";
const router = Router();

/* designation */
router.post("/designation", createDesignation);
router.delete("/designation/:id", deleteDesignation);
router.patch("/designation/:id", UpdateDesignation);
router.get("/designation", getAllDesignation);
router.get("/designation/:id", getAllDesignation);
/* End */
/* department */
router.post("/department", createDepartment);
router.delete("/department/:id", deleteDepartment);
router.patch("/department/:id", UpdateDepartment);
router.get("/department", getAllDepartment);
router.get("/department/:id", getAllDepartment);
/* End */
/* leave-type */
router.post("/leave-type", createLeaveType);
router.delete("/leave-type/:id", deleteLeaveType);
router.patch("/leave-type/:id", UpdateLeaveType);
router.get("/leave-type", getAllLeaveType);
router.get("/leave-type/:id", getAllLeaveType);
/* End */
/* staff-attendance */
router.post("/staff-attendance", createStaffAttendance);
router.delete("/staff-attendance/:id", deleteStaffAttendance);
router.patch("/staff-attendance/:id", UpdateStaffAttendance);
router.get("/staff-attendance", getAllStaffAttendance);
router.get("/staff-attendance/:id", getAllStaffAttendance);
/* End */
/* staff */
router.post("/staff", uploadStaffFiles.single("attachDocument"), createStaff);
router.delete("/staff/:id", deleteStaff);
router.patch("/staff/:id", UpdateStaff);
router.get("/staff", getAllStaff);
router.get("/staff/:id", getAllStaff);
/* End */
/* approve-leave-request */
router.post(
  "/approve-leave-request",
  uploadCreateApproveLeaveRequests.single("attachDocument"),
  createApproveLeaveRequest
);
router.delete("/approve-leave-request/:id", deleteApproveLeaveRequest);
router.patch("/staff/:id", UpdateApproveLeaveRequest);
router.get("/approve-leave-request", getAllApproveLeaveRequest);
router.get("/approve-leave-request/:id", getAllApproveLeaveRequest);
/* End */
/* apply-leave */
router.post(
  "/apply-leave",
  uploadCreateApplyLeave.single("attachDocument"),
  createApplyLeaveModel
);
router.delete("/apply-leave/:id", deleteApplyLeaveModel);
router.patch("/staff/:id", UpdateApplyLeaveModel);
router.get("/apply-leave", getAllApplyLeaveModel);
router.get("/apply-leave/:id", getAllApplyLeaveModel);
/* End */
export default router;
