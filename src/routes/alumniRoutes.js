import { Router } from "express";
import {
  UpdateAlumniEvent,
  createAlumniEvent,
  deleteAlumniEvent,
  getAllAlumniEvent,
} from "../controllers/alumni/EventsControllers.js";
import { uploadAlumniEventFiles } from "../middleware/AlumniFile.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
// router.use(authorizedUser)

/* print-admit-card */
router.post(
  "/alumni-event",
  uploadAlumniEventFiles.single("attachDocument"),
  createAlumniEvent
);
router.delete("/alumni-event/:id", deleteAlumniEvent);
router.patch("/alumni-event/:id", UpdateAlumniEvent);
router.get("/alumni-event/:id", getAllAlumniEvent);
router.get("/alumni-event", getAllAlumniEvent);
/* End */
export default router;
