import { Router } from "express";
import {
  UpdateLesson,
  createLesson,
  deleteLesson,
  getAllLesson,
} from "../controllers/lessonPlan/lessonControllers.js";
import {
  UpdateTopic,
  createTopic,
  deleteTopic,
  getAllTopic,
} from "../controllers/lessonPlan/topicControllers.js";
import { authorizedUser } from "../middleware/authentication.js";

const router = Router();
// router.use(authorizedUser)

/* lesson */
router.post("/lesson", createLesson);
router.delete("/lesson/:id", deleteLesson);
router.patch("/lesson/:id", UpdateLesson);
router.get("/lesson", getAllLesson);
router.get("/lesson/:id", getAllLesson);
/* End */
/* topic */
router.post("/topic", createTopic);
router.delete("/topic/:id", deleteTopic);
router.patch("/topic/:id", UpdateTopic);
router.get("/topic", getAllTopic);
router.get("/topic/:id", getAllTopic);
/* End */
export default router;
