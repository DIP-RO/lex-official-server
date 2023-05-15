import { Router } from "express";
import {
  UpdateHomework,
  createHomework,
  deleteHomework,
  getAllHomework,
} from "../controllers/homework/homeworkControllers.js";
import { uploadHomeWorkFiles } from "../middleware/HomeworkFile.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
router.use(authorizedUser);

/* home-work */
router.post(
  "/home-work",
  uploadHomeWorkFiles.single("attachDocument"),
  createHomework
);
router.delete("/home-work/:id", deleteHomework);
router.patch("/home-work/:id", UpdateHomework);
router.get("/home-work", getAllHomework);
router.get("/home-work/:id", getAllHomework);
/* End */
export default router;
