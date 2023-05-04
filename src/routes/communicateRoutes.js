import { Router } from "express";
import {
  UpdateEmailTemplate,
  createEmailTemplate,
  deleteEmailTemplate,
  getAllEmailTemplate,
} from "../controllers/communicate/EmailTemplatecontrollers.js";
import {
  UpdateNoticeBoard,
  createNoticeBoard,
  deleteNoticeBoard,
  getAllNoticeBoard,
} from "../controllers/communicate/NoticeBoardControllers.js";
import {
  UpdateSendMail,
  createSendMail,
  deleteSendMail,
  getAllSendMail,
} from "../controllers/communicate/SendMailControllers.js";
import {
  UpdateSms,
  createSms,
  deleteSms,
  getAllSms,
} from "../controllers/communicate/SendSmsControllers.js";
import {
  UpdateSmsTemplate,
  createSmsTemplate,
  deleteSmsTemplate,
  getAllSmsTemplate,
} from "../controllers/communicate/SmsTemplateControllers.js";
const router = Router();

/* email-template */
router.post("/email-template", createEmailTemplate);
router.delete("/email-template/:id", deleteEmailTemplate);
router.patch("/email-template/:id", UpdateEmailTemplate);
router.get("/email-template", getAllEmailTemplate);
/* End */
/* notice-board */
router.post("/notice-board", createNoticeBoard);
router.delete("/notice-board/:id", deleteNoticeBoard);
router.patch("/notice-board/:id", UpdateNoticeBoard);
router.get("/notice-board", getAllNoticeBoard);
/* End */
/* send-mail */
router.post("/send-mail", createSendMail);
router.delete("/send-mail/:id", deleteSendMail);
router.patch("/send-mail/:id", UpdateSendMail);
router.get("/send-mail", getAllSendMail);
/* End */
/* send-sms */
router.post("/send-sms", createSms);
router.delete("/send-sms/:id", deleteSms);
router.patch("/send-sms/:id", UpdateSms);
router.get("/send-sms", getAllSms);
/* End */
/* send-template */
router.post("/send-template", createSmsTemplate);
router.delete("/send-template/:id", deleteSmsTemplate);
router.patch("/send-template/:id", UpdateSmsTemplate);
router.get("/send-template", getAllSmsTemplate);
/* End */
export default router;