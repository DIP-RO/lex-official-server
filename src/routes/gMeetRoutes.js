import { Router } from "express";
import {
  UpdateGMeets,
  createLiveClass,
  deleteLiveClass,
  getGMeets,
} from "../controllers/gMeet/gMeetControllers.js";
const router = Router();

/* g-meet */
router.post("/g-meet", createLiveClass);
router.delete("/g-meet/:id", deleteLiveClass);
router.patch("/g-meet/:id", UpdateGMeets);
router.get("/g-meet", getGMeets);
/* End */
export default router;
