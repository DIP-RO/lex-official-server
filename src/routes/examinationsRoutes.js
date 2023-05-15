import { Router } from "express";
import {
  UpdateAdmitCardDesign,
  createAdmitCardDesign,
  deleteAdmitCardDesign,
  getAllAdmitCardDesign,
} from "../controllers/examinations/DesignAdminCardControllers.js";
import {
  UpdateDesignMarksheet,
  createDesignMarksheet,
  deleteDesignMarksheet,
  getAllDesignMarksheet,
} from "../controllers/examinations/DesignMarksheetControllers.js";
import {
  UpdateExamGroup,
  createExamGroup,
  deleteExamGroup,
  getAllExamGroup,
} from "../controllers/examinations/examGroupControllers.js";
import {
  UpdateMarkDivision,
  createMarkDivision,
  deleteMarkDivision,
  getAllMarkDivision,
} from "../controllers/examinations/markDivisionControllers.js";
import {
  UpdateMarkGrade,
  createMarkGrade,
  deleteMarkGrade,
  getAllMarkGrade,
} from "../controllers/examinations/markGradeControllers.js";
import {
  UpdatePrintAdmitCard,
  createPrintAdmitCard,
  deletePrintAdmitCard,
  getAllPrintAdmitCard,
} from "../controllers/examinations/printAdmitCardControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
import {
  uploadDesignAdmitCardFiles,
  uploadDesignMarlSheetFiles,
} from "../middleware/designAdmitCardFile.js";

const router = Router();
// router.use(authorizedUser)

/* admit-cart-design */
// router.post(
//   "/expenses",
//   uploadExpensesFiles.single("attachDocument"),
//   createExpense
// );
router.post(
  "/admit-card-design",
  uploadDesignAdmitCardFiles.fields([
    { name: "LeftLogo", maxCount: 1 },
    { name: "RightLogo", maxCount: 1 },
    { name: "Sign", maxCount: 1 },
    { name: "BackgroundImage", maxCount: 1 },
  ]),
  createAdmitCardDesign
);

router.delete("/admit-cart-design/:id", deleteAdmitCardDesign);
router.patch("/admit-cart-design/:id", UpdateAdmitCardDesign);
router.get("/admit-cart-design", getAllAdmitCardDesign);
router.get("/admit-cart-design/:id", getAllAdmitCardDesign);
/* End */
/* design-mark-sheet */
router.post(
  "/design-mark-sheet",
  uploadDesignMarlSheetFiles.fields([
    { name: "HeaderImage", maxCount: 1 },
    { name: "LeftLogo", maxCount: 1 },
    { name: "RightLogo", maxCount: 1 },
    { name: "LeftSign", maxCount: 1 },
    { name: "MiddleSign", maxCount: 1 },
    { name: "RightSign", maxCount: 1 },
    { name: "BackgroundImage", maxCount: 1 },
  ]),
  createDesignMarksheet
);
router.delete("/design-mark-sheet/:id", deleteDesignMarksheet);
router.patch("/design-mark-sheet/:id", UpdateDesignMarksheet);
router.get("/design-mark-sheet", getAllDesignMarksheet);
router.get("/design-mark-sheet/:id", getAllDesignMarksheet);
/* End */
/* exam-group */
router.post("/exam-group", createExamGroup);
router.delete("/exam-group/:id", deleteExamGroup);
router.patch("/exam-group/:id", UpdateExamGroup);
router.get("/exam-group", getAllExamGroup);
router.get("/exam-group/:id", getAllExamGroup);
/* End */
/* mark-grade */
router.post("/mark-grade", createMarkGrade);
router.delete("/mark-grade/:id", deleteMarkGrade);
router.patch("/mark-grade/:id", UpdateMarkGrade);
router.get("/mark-grade", getAllMarkGrade);
router.get("/mark-grade/:id", getAllMarkGrade);
/* End */
/* mark-division */
router.post("/mark-division", createMarkDivision);
router.delete("/mark-division/:id", deleteMarkDivision);
router.patch("/mark-division/:id", UpdateMarkDivision);
router.get("/mark-division", getAllMarkDivision);
router.get("/mark-division/:id", getAllMarkDivision);
/* End */
/* print-admit-card */
router.post("/print-admit-card", createPrintAdmitCard);
router.delete("/print-admit-card/:id", deletePrintAdmitCard);
router.patch("/print-admit-card/:id", UpdatePrintAdmitCard);
router.get("/print-admit-card", getAllPrintAdmitCard);
router.get("/print-admit-card/:id", getAllPrintAdmitCard);
/* End */
export default router;
