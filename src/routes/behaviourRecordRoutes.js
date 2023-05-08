import { Router } from "express";
import {
  UpdateIncidents,
  createIncidents,
  deleteIncidents,
  getAllIncidents,
} from "../controllers/behaviourRecord/incidentsControllers.js";
const router = Router();

/* incidents */
router.post("/incidents", createIncidents);
router.delete("/incidents/:id", deleteIncidents);
router.patch("/incidents/:id", UpdateIncidents);
router.get("/incidents", getAllIncidents);
router.get("/incidents/:id", getAllIncidents);
/* End */
export default router;
