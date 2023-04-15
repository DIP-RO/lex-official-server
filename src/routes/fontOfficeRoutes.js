import { Router } from "express";
import { createAdmissionEnquiry } from "../controllers/fontOffice/AdmissionEnquiryControllers.js";

const router = Router();

router.post("/admission-enquiry", createAdmissionEnquiry);

export default router;
