import { Router } from "express";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  filterAdmissionEnquiry,
  getAllAdmissionEnquiries,
} from "../controllers/frontOffice/AdmissionEnquiryControllers.js";
import {
  UpdateComplain,
  getComplain
} from "../controllers/frontOffice/ComplainControllers.js";
import {
  UpdatePhoneCallLog,
  createPhoneCallLog,
  deletePhoneCallLog,
  getAllPhoneCallLogs,
} from "../controllers/frontOffice/PhoneCallLogControllers.js";
import {
  UpdatePostalDispatch,
  createPostalDispatch,
  deletePostalDispatch,
  getAllPostalDispatch,
} from "../controllers/frontOffice/PostalDispatchControllers.js";
import {
  UpdatePostalReceive,
  createPostalReceive,
  deletePostalReceive,
  getAllPostalReceive,
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

import {
  UpdateVisitorBook,
  createVisitorBook,
  deleteVisitorBook,
  getAllVisitorBooks,
} from "../controllers/frontOffice/VisitorBookControllers.js";
import {
  uploadPostalDispatchFiles,
  uploadPostalReceiveFiles,
  uploadVisitorFiles
} from "../middleware/FrontOfficeFile.js";
import { authorizedUser } from "../middleware/authentication.js";

const router = Router();
router.use(authorizedUser)

/* Admission Enquiry Routes */
router.post("/admission-enquiry", createAdmissionEnquiry);
router.delete("/admission-enquiry/:id", deleteAdmissionEnquiry);
router.patch("/admission-enquiry/:id", UpdateAdmissionEnquiry);
router.get("/admission-enquiry/:id", UpdateAdmissionEnquiry);
router.get("/admission-enquiry", getAllAdmissionEnquiries);
router.get("/admission-enquiry/filter", filterAdmissionEnquiry);
/* End */

/* Visitor Book */
router.post(
  "/visitor-book",
  uploadVisitorFiles.single("attachDocument"),
  createVisitorBook
);
router.delete("/visitor-book/:id", deleteVisitorBook);
router.patch("/visitor-book/:id", UpdateVisitorBook);
router.get("/visitor-book/:id", getAllVisitorBooks);
router.get("/visitor-book", getAllVisitorBooks);
router.get("/visitor-book/:id", getAllVisitorBooks);
// /* End */

/* phone log */
router.post("/phone-call-log", createPhoneCallLog);
router.delete("/phone-call-log/:id", deletePhoneCallLog);
router.patch("/phone-call-log/:id", UpdatePhoneCallLog);
router.get("/phone-call-log", getAllPhoneCallLogs);
router.get("/phone-call-log/:id", getAllPhoneCallLogs);
/* End */

/* postal-dispatch */
router.post(
  "/postal-dispatch",
  uploadPostalDispatchFiles.single("attachDocument"),
  createPostalDispatch
);
router.delete("/postal-dispatch/:id", deletePostalDispatch);
router.patch("/postal-dispatch/:id", UpdatePostalDispatch);
router.get("/postal-dispatch/:id", getAllPostalDispatch);
router.get("/postal-dispatch", getAllPostalDispatch);
router.get("/postal-dispatch/:id", getAllPostalDispatch);
/* End */

/* postal-receive */
router.post(
  "/postal-receive",
  uploadPostalReceiveFiles.single("attachDocument"),
  createPostalReceive
);
router.delete("/postal-receive/:id", deletePostalReceive);
router.patch("/postal-receive/:id", UpdatePostalReceive);
router.get("/postal-receive/:id", getAllPostalReceive);
router.get("/postal-receive", getAllPostalReceive);
router.get("/postal-receive/:id", getAllPostalReceive);
/* End */

/* complain */
router.patch("/complain/:id", UpdateComplain);
router.get("/complain/:id", getComplain);
router.get("/complain", getComplain);
router.get("/complain/:id", getComplain);
/* End */

/* source */
router.post("/source", createSource);
router.delete("/source/:id", deleteSource);
router.patch("/source/:id", UpdateSource);
router.get("/source", getAllSource);
router.get("/source/:id", getAllSource);
/* End */

/* reference */
router.post("/reference", createReference);
router.delete("/reference/:id", deleteReference);
router.patch("/reference/:id", UpdateReference);
router.get("/reference", getAllReference);
router.get("/reference/:id", getAllReference);
/* End */

/* purpose */
router.post("/purpose", createPurpose);
router.delete("/purpose/:id", deletePurpose);
router.patch("/purpose/:id", UpdatePurpose);
router.get("/purpose", getAllPurpose);
router.get("/purpose/:id", getAllPurpose);
/* End */

/* complain-type */
router.post("/complain-type", createComplainType);
router.delete("/complain-type/:id", deleteComplainType);
router.patch("/complain-type/:id", UpdateComplainType);
router.get("/complain-type", getAllComplainType);
router.get("/complain-type/:id", getAllComplainType);
/* End */
export default router;
