import { Router } from "express";
import {
  UpdateGenerateCertificates,
  createGenerateCertificates,
  deleteGenerateCertificates,
  getAllGenerateCertificates,
} from "../controllers/certificate/GenerateCertificateController.js";
import {
  UpdateGenerateStaffIDCard,
  createGenerateStaffIDCard,
  deleteGenerateStaffIDCard,
  getAllGenerateStaffIDCard,
} from "../controllers/certificate/GenerateStaffIDCardController.js";
import {
  UpdateGenerateStudentIDCard,
  createGenerateStudentIDCard,
  deleteGenerateStudentIDCard,
  getAllGenerateStudentIDCard,
} from "../controllers/certificate/GenerateStudentIDCardController.js";
import {
  UpdateStaffIDCard,
  createStaffIDCard,
  deleteStaffIDCard,
  getAllStaffIDCard,
} from "../controllers/certificate/StaffIDCardController.js";
import {
  UpdateStudentCertificates,
  createStudentCertificates,
  deleteStudentCertificates,
  getAllStudentCertificates,
} from "../controllers/certificate/StudentCertificateController.js";
import {
  UpdateStudentIDCard,
  createStudentIDCard,
  deleteStudentIDCard,
  getAllStudentIDCard,
} from "../controllers/certificate/StudentIDCardController.js";
import {
  uploadStaffIdCardFiles,
  uploadStudentCertificatesFiles,
  uploadStudentIdCardFiles,
} from "../middleware/CertificateFile.js";
const router = Router();

/* generate-certificates */
router.post("/generate-certificates", createGenerateCertificates);
router.delete("/generate-certificates/:id", deleteGenerateCertificates);
router.patch("/generate-certificates/:id", UpdateGenerateCertificates);
router.get("/generate-certificates", getAllGenerateCertificates);
router.get("/generate-certificates/:id", getAllGenerateCertificates);
/* End */
/* generate-staff-id-card */
router.post("/generate-staff-id-card", createGenerateStaffIDCard);
router.delete("/generate-staff-id-card/:id", deleteGenerateStaffIDCard);
router.patch("/generate-staff-id-card/:id", UpdateGenerateStaffIDCard);
router.get("/generate-staff-id-card", getAllGenerateStaffIDCard);
router.get("/generate-staff-id-card/:id", getAllGenerateStaffIDCard);
/* End */
/* generate-student-id-card */
router.post("/generate-student-id-card", createGenerateStudentIDCard);
router.delete("/generate-student-id-card/:id", deleteGenerateStudentIDCard);
router.patch("/generate-student-id-card/:id", UpdateGenerateStudentIDCard);
router.get("/generate-student-id-card", getAllGenerateStudentIDCard);
router.get("/generate-student-id-card/:id", getAllGenerateStudentIDCard);
/* End */
/* staff-id-card */

router.post(
  "/staff-id-card",
  uploadStaffIdCardFiles.fields([
    { name: "BackgroundImage", maxCount: 1 },
    { name: "Logo", maxCount: 1 },
    { name: "Signature", maxCount: 1 },
  ]),
  createStaffIDCard
);
router.delete("/staff-id-card/:id", deleteStaffIDCard);
router.patch("/staff-id-card/:id", UpdateStaffIDCard);
router.get("/staff-id-card", getAllStaffIDCard);
router.get("/staff-id-card/:id", getAllStaffIDCard);
/* End */
/* student-certificates */
router.post(
  "/student-certificates",
  uploadStudentCertificatesFiles.single("attachDocument"),
  createStudentCertificates
);
router.delete("/student-certificates/:id", deleteStudentCertificates);
router.patch("/student-certificates/:id", UpdateStudentCertificates);
router.get("/student-certificates", getAllStudentCertificates);
router.get("/student-certificates/:id", getAllStudentCertificates);
/* End */
/* student-id-card */
router.post(
  "/student-id-card",
  uploadStudentIdCardFiles.fields([
    { name: "BackgroundImage", maxCount: 1 },
    { name: "Logo", maxCount: 1 },
    { name: "Signature", maxCount: 1 },
  ]),
  createStudentIDCard
);
router.delete("/student-id-card/:id", deleteStudentIDCard);
router.patch("/student-id-card/:id", UpdateStudentIDCard);
router.get("/student-id-card", getAllStudentIDCard);
router.get("/student-id-card/:id", getAllStudentIDCard);
/* End */
export default router;
