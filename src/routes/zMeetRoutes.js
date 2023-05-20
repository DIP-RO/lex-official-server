import { Router } from "express";
import { authorizedUser } from "../middleware/authentication.js";
import {
  UpdateLiveMeeting,
  createLiveMeeting,
  deleteLiveMeeting,
  getAllLiveMeeting,
} from "../controllers/zMeet/liveMeetingControllers.js";
const router = Router();
router.use(authorizedUser);

/* z-meet */
router.post("/z-meet", createLiveMeeting);
router.delete("/z-meet/:id", deleteLiveMeeting);
router.patch("/z-meet/:id", UpdateLiveMeeting);
router.get("/z-meet", getAllLiveMeeting);
/* End */
export default router;
