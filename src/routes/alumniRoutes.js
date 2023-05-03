import { Router } from "express";
import {
  UpdateAlumniEvent,
  createAlumniEvent,
  deleteAlumniEvent,
  getAllAlumniEvent,
} from "../controllers/alumni/EventsControllers.js";
const router = Router();

/* print-admit-card */
router.post("/alumni-event", createAlumniEvent);
router.delete("/alumni-event/:id", deleteAlumniEvent);
router.patch("/alumni-event/:id", UpdateAlumniEvent);
router.get("/alumni-event", getAllAlumniEvent);
/* End */
export default router;
