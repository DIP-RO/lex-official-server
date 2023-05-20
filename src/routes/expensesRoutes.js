import { Router } from "express";
import {
  UpdateExpenseHead,
  createExpenseHead,
  deleteExpenseHead,
  getAllExpenseHead,
} from "../controllers/expenses/expenseHeadControllers.js";
import {
  UpdateExpense,
  createExpense,
  deleteExpense,
  getAllExpense,
} from "../controllers/expenses/expensesControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
import { uploadExpensesFiles } from "../middleware/expensesFile.js";
import { searchExpense } from "../controllers/expenses/searchExpenseController.js";
const router = Router();
// router.use(authorizedUser);

/* expenses */
router.post(
  "/expenses",
  uploadExpensesFiles.single("attachDocument"),
  createExpense
);
router.delete("/expenses/:id", deleteExpense);
router.patch("/expenses/:id", UpdateExpense);
router.get("/expenses", getAllExpense);
router.get("/search-expenses", searchExpense);
router.get("/expenses/:id", getAllExpense);
/* expenses-head */
router.post("/expenses-head", createExpenseHead);
router.delete("/expenses-head/:id", deleteExpenseHead);
router.patch("/expenses-head/:id", UpdateExpenseHead);
router.get("/expenses-head", getAllExpenseHead);
router.get("/expenses-head/:id", getAllExpenseHead);
/* End */
export default router;
