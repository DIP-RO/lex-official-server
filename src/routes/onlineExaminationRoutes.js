import { Router } from "express";
import {
  UpdateOnlineExam,
  createOnlineExam,
  deleteOnlineExam,
  getAllOnlineExam,
} from "../controllers/onlineExamination/onlineExamControllers.js";
import {
  UpdateQuestionBank,
  createQuestionBank,
  deleteQuestionBank,
  getAllQuestionBank,
} from "../controllers/onlineExamination/questionBankControllers.js";

const router = Router();
/* online-exam */
router.post("/online-exam", createOnlineExam);
router.delete("/online-exam/:id", deleteOnlineExam);
router.patch("/online-exam/:id", UpdateOnlineExam);
router.get("/online-exam", getAllOnlineExam);
router.get("/online-exam/:id", getAllOnlineExam);
/* End */
/* question-bank */
router.post("/question-bank", createQuestionBank);
router.delete("/question-bank/:id", deleteQuestionBank);
router.patch("/question-bank/:id", UpdateQuestionBank);
router.get("/question-bank", getAllQuestionBank);
router.get("/question-bank/:id", getAllQuestionBank);
/* End */
export default router;
