import { Router } from "express";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  getAllAdmissionEnquiries,
} from "../controllers/frontOffice/AdmissionEnquiryControllers.js";
import {
  UpdateComplain,
  createComplain,
  deleteComplain,
  getAllComplain,
  getComplain,
} from "../controllers/frontOffice/ComplainControllers.js";
import {
  UpdatePhoneCallLog,
  createPhoneCallLog,
  deletePhoneCallLog,
  getAllPhoneCallLogs,
  getPhoneCallLog,
} from "../controllers/frontOffice/PhoneCallLogControllers.js";
import {
  UpdatePostalDispatch,
  createPostalDispatch,
  deletePostalDispatch,
  getAllPostalDispatch,
  getPostalDispatch,
} from "../controllers/frontOffice/PostalDispatchControllers.js";
import {
  UpdatePostalReceive,
  createPostalReceive,
  deletePostalReceive,
  getAllPostalReceive,
  getPostalReceive,
} from "../controllers/frontOffice/PostalReceiveContgrollers.js";

import {
  UpdateComplainType,
  createComplainType,
  deleteComplainType,
  getAllComplainType,
} from "../controllers/frontOffice/SetupFrontOffice/ComplainTypeControllers.js";
import {
  UpdatePurpose,
  createPurpose,
  deletePurpose,
  getAllPurpose,
} from "../controllers/frontOffice/SetupFrontOffice/PurposeControllers.js";
import {
  UpdateReference,
  createReference,
  deleteReference,
  getAllReference,
} from "../controllers/frontOffice/SetupFrontOffice/ReferenceControllers.js";
import {
  UpdateSource,
  createSource,
  deleteSource,
  getAllSource,
} from "../controllers/frontOffice/SetupFrontOffice/SourceControllers.js";
import { uploadComplainFiles } from "../middleware/complainFileUploadMiddleware.js";
import {
  UpdateVisitorBook,
  createVisitorBook,
  deleteVisitorBook,
  getAllVisitorBooks,
  getVisitorBook,
} from "../controllers/frontOffice/VisitorBookControllers.js";

const router = Router();

/* Admission Enquiry Routes */
router.post("/admission-enquiry", createAdmissionEnquiry);
router.delete("/admission-enquiry/:id", deleteAdmissionEnquiry);
router.patch("/admission-enquiry/:id", UpdateAdmissionEnquiry);
router.get("/admission-enquiry/:id", UpdateAdmissionEnquiry);
router.get("/admission-enquiry", getAllAdmissionEnquiries);
/* End */

/* Visitor Book */
router.post("/visitor-book", createVisitorBook);
router.delete("/visitor-book/:id", deleteVisitorBook);
router.patch("/visitor-book/:id", UpdateVisitorBook);
router.get("/visitor-book/:id", getVisitorBook);
router.get("/visitor-book", getAllVisitorBooks);
// /* End */

/* phone log */
router.post("/phone-call-log", createPhoneCallLog);
router.delete("/phone-call-log/:id", deletePhoneCallLog);
router.patch("/phone-call-log/:id", UpdatePhoneCallLog);
router.get("/phone-call-log/:id", getPhoneCallLog);
router.get("/phone-call-log", getAllPhoneCallLogs);
/* End */

/* postal-dispatch */
router.post("/postal-dispatch", createPostalDispatch);
router.delete("/postal-dispatch/:id", deletePostalDispatch);
router.patch("/postal-dispatch/:id", UpdatePostalDispatch);
router.get("/postal-dispatch/:id", getPostalDispatch);
router.get("/postal-dispatch", getAllPostalDispatch);
/* End */

/* postal-receive */
router.post("/postal-receive", createPostalReceive);
router.delete("/postal-receive/:id", deletePostalReceive);
router.patch("/postal-receive/:id", UpdatePostalReceive);
router.get("/postal-receive/:id", getPostalReceive);
router.get("/postal-receive", getAllPostalReceive);
/* End */

/* complain */
router.post(
  "/complain",
  uploadComplainFiles.single("attachDocument"),
  createComplain
);
router.delete("/complain/:id", deleteComplain);
router.patch("/complain/:id", UpdateComplain);
router.get("/complain/:id", getComplain);
router.get("/complain", getAllComplain);
/* End */

/* source */
router.post("/source", createSource);
router.delete("/source/:id", deleteSource);
router.patch("/source/:id", UpdateSource);
router.get("/source", getAllSource);
/* End */

/* reference */
router.post("/reference", createReference);
router.delete("/reference/:id", deleteReference);
router.patch("/reference/:id", UpdateReference);
router.get("/reference", getAllReference);
/* End */

/* purpose */
router.post("/purpose", createPurpose);
router.delete("/purpose/:id", deletePurpose);
router.patch("/purpose/:id", UpdatePurpose);
router.get("/purpose", getAllPurpose);
/* End */

/* complain-type */
router.post("/complain-type", createComplainType);
router.delete("/complain-type/:id", deleteComplainType);
router.patch("/complain-type/:id", UpdateComplainType);
router.get("/complain-type", getAllComplainType);
/* End */
export default router;
