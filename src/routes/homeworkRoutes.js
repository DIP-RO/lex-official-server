import { Router } from "express";
import {
  UpdateHomework,
  createHomework,
  deleteHomework,
  getAllHomework,
} from "../controllers/homework/homeworkControllers.js";
const router = Router();

/* home-work */
router.post("/home-work", createHomework);
router.delete("/home-work/:id", deleteHomework);
router.patch("/home-work/:id", UpdateHomework);
router.get("/home-work", getAllHomework);
router.get("/home-work/:id", getAllHomework);
/* End */
export default router;
