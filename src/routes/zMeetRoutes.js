import { Router } from "express";
import {
  UpdateZMeet,
  createZMeet,
  deleteZMeet,
  getAllZMeet,
} from "../controllers/zMeet/zMeetControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
router.use(authorizedUser);

/* z-meet */
router.post("/z-meet", createZMeet);
router.delete("/z-meet/:id", deleteZMeet);
router.patch("/z-meet/:id", UpdateZMeet);
router.get("/z-meet", getAllZMeet);
/* End */
export default router;
