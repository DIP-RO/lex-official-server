import { Router } from "express";
import {
  createAdmissionEnquiry,
  deleAdmissionEnquiry,
} from "../controllers/fontOffice/AdmissionEnquiryControllers.js";

const router = Router();

/* Admission Enquiry Routes */
router.post("/admission-enquiry", createAdmissionEnquiry);
router.delete("/admission-enquiry/:id", deleAdmissionEnquiry);

export default router;
