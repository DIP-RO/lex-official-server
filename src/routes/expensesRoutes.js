import { Router } from "express";
import {
  UpdateExpense,
  createExpense,
  deleteExpense,
  getAllExpense,
} from "../controllers/expenses/expensesControllers.js";
import {
  UpdateExpenseHead,
  createExpenseHead,
  deleteExpenseHead,
  getAllExpenseHead,
} from "../controllers/expenses/expenseHeadControllers.js";
const router = Router();

/* expenses */
router.post("/expenses", createExpense);
router.delete("/expenses/:id", deleteExpense);
router.patch("/expenses/:id", UpdateExpense);
router.get("/expenses", getAllExpense);
/* expenses-head */
router.post("/expenses-head", createExpenseHead);
router.delete("/expenses-head/:id", deleteExpenseHead);
router.patch("/expenses-head/:id", UpdateExpenseHead);
router.get("/expenses-head", getAllExpenseHead);
/* End */
export default router;
