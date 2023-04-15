import { Router } from "express";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  getAllAdmissionEnquiries,
} from "../controllers/fontOffice/AdmissionEnquiryControllers.js";

const router = Router();

/* Admission Enquiry Routes */
router.post("/admission-enquiry", createAdmissionEnquiry);
router.delete("/admission-enquiry/:id", deleteAdmissionEnquiry);
router.patch("/admission-enquiry/:id", UpdateAdmissionEnquiry);
router.get("/admission-enquiry", getAllAdmissionEnquiries);

export default router;
