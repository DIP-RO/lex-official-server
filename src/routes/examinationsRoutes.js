import { Router } from "express";
import { UpdateAdmitCardDesign, createAdmitCardDesign, deleteAdmitCardDesign, getAllAdmitCardDesign } from "../controllers/examinations/DesignAdminCardControllers.js";
import { UpdateDesignMarksheet, createDesignMarksheet, deleteDesignMarksheet, getAllDesignMarksheet } from "../controllers/examinations/DesignMarksheetControllers.js";
import { UpdateExamGroup, createExamGroup, deleteExamGroup, getAllExamGroup } from "../controllers/examinations/examGroupControllers.js";
import { UpdateMarkGrade, createMarkGrade, deleteMarkGrade, getAllMarkGrade } from "../controllers/examinations/markGradeControllers.js";
import { UpdateMarkDivision, createMarkDivision, deleteMarkDivision, getAllMarkDivision } from "../controllers/examinations/markDivisionControllers.js";
import { UpdatePrintAdmitCard, createPrintAdmitCard, deletePrintAdmitCard, getAllPrintAdmitCard } from "../controllers/examinations/printAdmitCardControllers.js";



const router = Router();

/* admit-cart-design */
router.post("/admit-cart-design", createAdmitCardDesign);
router.delete("/admit-cart-design/:id", deleteAdmitCardDesign);
router.patch("/admit-cart-design/:id", UpdateAdmitCardDesign);
router.get("/admit-cart-design", getAllAdmitCardDesign);
/* End */
/* design-mark-sheet */
router.post("/design-mark-sheet", createDesignMarksheet);
router.delete("/design-mark-sheet/:id", deleteDesignMarksheet);
router.patch("/design-mark-sheet/:id", UpdateDesignMarksheet);
router.get("/design-mark-sheet", getAllDesignMarksheet);
/* End */
/* exam-group */
router.post("/exam-group", createExamGroup);
router.delete("/exam-group/:id", deleteExamGroup);
router.patch("/exam-group/:id", UpdateExamGroup);
router.get("/exam-group", getAllExamGroup);
/* End */
/* mark-grade */
router.post("/mark-grade", createMarkGrade);
router.delete("/mark-grade/:id", deleteMarkGrade);
router.patch("/mark-grade/:id", UpdateMarkGrade);
router.get("/mark-grade", getAllMarkGrade);
/* End */
/* mark-division */
router.post("/mark-division", createMarkDivision);
router.delete("/mark-division/:id", deleteMarkDivision);
router.patch("/mark-division/:id", UpdateMarkDivision);
router.get("/mark-division", getAllMarkDivision);
/* End */
/* print-admit-card */
router.post("/print-admit-card", createPrintAdmitCard);
router.delete("/print-admit-card/:id", deletePrintAdmitCard);
router.patch("/print-admit-card/:id", UpdatePrintAdmitCard);
router.get("/print-admit-card", getAllPrintAdmitCard);
/* End */
export default router;