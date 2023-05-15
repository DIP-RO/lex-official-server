import { Router } from "express";
import {
  UpdateGMeets,
  createLiveClass,
  deleteLiveClass,
  getGMeets,
} from "../controllers/gMeet/gMeetControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
router.use(authorizedUser);

/* g-meet */
router.post("/g-meet", createLiveClass);
router.delete("/g-meet/:id", deleteLiveClass);
router.patch("/g-meet/:id", UpdateGMeets);
router.get("/g-meet", getGMeets);
router.get("/g-meet/:id", getGMeets);
/* End */
export default router;
