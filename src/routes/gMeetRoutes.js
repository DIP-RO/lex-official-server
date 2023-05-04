import { Router } from "express";
import {
  UpdateGMeets,
  createLiveClass,
  deleteLiveClass,
  getGMeets,
} from "../controllers/gMeet/gMeetControllers.js";
const router = Router();

/* create-line-class */
router.post("/create-line-class", createLiveClass);
router.delete("/create-line-class/:id", deleteLiveClass);
router.patch("/create-line-class/:id", UpdateGMeets);
router.get("/create-line-class", getGMeets);
/* End */
export default router;
