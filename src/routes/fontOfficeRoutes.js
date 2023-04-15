import { Router } from "express";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  getAllAdmissionEnquiries,
} from "../controllers/fontOffice/AdmissionEnquiryControllers.js";
import {
  UpdateVisitorBook,
  createVisitorBook,
  deleteVisitorBook,
  getAllVisitorBooks,
  getVisitorBook,
} from "../controllers/fontOffice/visitorBookControllers.js";
import {
  UpdatePhoneCallLog,
  createPhoneCallLog,
  deletePhoneCallLog,
  getAllPhoneCallLogs,
  getPhoneCallLog,
} from "../controllers/fontOffice/PhoneCallLogControllers.js";
import {
  UpdatePostalDispatch,
  createPostalDispatch,
  deletePostalDispatch,
  getAllPostalDispatch,
  getPostalDispatch,
} from "../controllers/fontOffice/PostalDispatchControllers.js";
import {
  UpdatePostalReceive,
  createPostalReceive,
  deletePostalReceive,
  getAllPostalReceive,
  getPostalReceive,
} from "../controllers/fontOffice/PostalReceiveContgrollers.js";
import {
  UpdateComplain,
  createComplain,
  deleteComplain,
  getAllComplain,
  getComplain,
} from "../controllers/fontOffice/ComplainControllers.js";

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
/* End */

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
router.post("/complain", createComplain);
router.delete("/complain/:id", deleteComplain);
router.patch("/complain/:id", UpdateComplain);
router.get("/complain/:id", getComplain);
router.get("/complain", getAllComplain);
/* End */

export default router;
