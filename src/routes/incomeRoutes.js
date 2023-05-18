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
import { uploadIncomeFiles } from "../middleware/IncomeFile,.js";
import { authorizedUser } from "../middleware/authentication.js";
import { searchIncome } from "../controllers/income/SearchincomeController.js";
const router = Router();
router.use(authorizedUser);

/* income */
router.post(
  "/income",
  uploadIncomeFiles.single("attachDocument"),
  createIncome
);
router.delete("/income/:id", deleteIncome);
router.patch("/income/:id", UpdateIncome);
router.get("/income", getAllIncome);
router.get("/income/:id", getAllIncome);
router.get("/search-income", searchIncome);
/* End */
/* income-head */
router.post("/income-head", createIncomeHead);
router.delete("/income-head/:id", deleteIncomeHead);
router.patch("/income-head/:id", UpdateIncomeHead);
router.get("/income-head", getAllIncomeHead);
router.get("/income-head/:id", getAllIncomeHead);
/* End */
/* search income */
export default router;
