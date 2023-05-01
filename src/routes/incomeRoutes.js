import { Router } from "express";
import {
  UpdateIncome,
  createIncome,
  deleteIncome,
  getAllIncome,
} from "../controllers/income/incomeControllers.js";
import {
  UpdateIncomeHead,
  createIncomeHead,
  deleteIncomeHead,
  getAllIncomeHead,
} from "../controllers/income/incomeHeadControllers.js";
const router = Router();

/* income */
router.post("/income", createIncome);
router.delete("/income/:id", deleteIncome);
router.patch("/income/:id", UpdateIncome);
router.get("/income", getAllIncome);
/* End */
/* income-head */
router.post("/income-head", createIncomeHead);
router.delete("/income-head/:id", deleteIncomeHead);
router.patch("/income-head/:id", UpdateIncomeHead);
router.get("/income-head", getAllIncomeHead);
/* End */
export default router;
