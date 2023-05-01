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

const router = Router();

/* lesson */
router.post("/lesson", createLesson);
router.delete("/lesson/:id", deleteLesson);
router.patch("/lesson/:id", UpdateLesson);
router.get("/lesson", getAllLesson);
/* End */
/* topic */
router.post("/topic", createTopic);
router.delete("/topic/:id", deleteTopic);
router.patch("/topic/:id", UpdateTopic);
router.get("/topic", getAllTopic);
/* End */
export default router;
