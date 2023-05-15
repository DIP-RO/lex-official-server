import { Router } from "express";
import {
  UpdateAssignVehicle,
  createAssignVehicle,
  deleteAssignVehicle,
  getAllAssignVehicle,
} from "../controllers/transport/AssaginVehicleControllers.js";
import {
  UpdateFeesMaster,
  createFeesMaster,
  deleteFeesMaster,
  getAllFeesMaster,
} from "../controllers/transport/FeesMasterControllers.js";
import {
  UpdatePickupPoint,
  createPickupPoint,
  deletePickupPoint,
  getAllPickupPoint,
} from "../controllers/transport/PickupPointControllers.js";
import {
  UpdateRoutePickupPoints,
  createRoutePickupPoints,
  deleteRoutePickupPoints,
  getAllRoutePickupPoints,
} from "../controllers/transport/RoutePickupPointControllers.js";
import {
  UpdateRoutes,
  createRoutes,
  deleteRoutes,
  getAllRoutes,
} from "../controllers/transport/RoutesControllers.js";
import {
  UpdateVehicle,
  createVehicle,
  deleteVehicle,
  getAllVehicle,
} from "../controllers/transport/VehicleControllers.js";
import { uploadVehicleFiles } from "../middleware/TransportFile.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
// router.use(authorizedUser)

/* assign-vehicle */
router.post("/assign-vehicle", createAssignVehicle);
router.delete("/assign-vehicle/:id", deleteAssignVehicle);
router.patch("/assign-vehicle/:id", UpdateAssignVehicle);
router.get("/assign-vehicle", getAllAssignVehicle);
router.get("/assign-vehicle/:id", getAllAssignVehicle);
/* End */
/* fees-master */
router.post("/fees-master", createFeesMaster);
router.delete("/fees-master/:id", deleteFeesMaster);
router.patch("/fees-master/:id", UpdateFeesMaster);
router.get("/fees-master", getAllFeesMaster);
router.get("/fees-master/:id", getAllFeesMaster);
/* End */
/* pickup-point */
router.post("/pickup-point", createPickupPoint);
router.delete("/pickup-point/:id", deletePickupPoint);
router.patch("/pickup-point/:id", UpdatePickupPoint);
router.get("/pickup-point", getAllPickupPoint);
router.get("/pickup-point/:id", getAllPickupPoint);
/* End */
/* route-pickup-point */
router.post("/route-pickup-point", createRoutePickupPoints);
router.delete("/route-pickup-point/:id", deleteRoutePickupPoints);
router.patch("/route-pickup-point/:id", UpdateRoutePickupPoints);
router.get("/route-pickup-point", getAllRoutePickupPoints);
router.get("/route-pickup-point/:id", getAllRoutePickupPoints);
/* End */
/* routes */
router.post("/routes", createRoutes);
router.delete("/routes/:id", deleteRoutes);
router.patch("/routes/:id", UpdateRoutes);
router.get("/routes", getAllRoutes);
router.get("/routes/:id", getAllRoutes);
/* End */
/* vehicle */
router.post(
  "/vehicle",
  uploadVehicleFiles.single("attachDocument"),
  createVehicle
);
router.delete("/vehicle/:id", deleteVehicle);
router.patch("/vehicle/:id", UpdateVehicle);
router.get("/vehicle", getAllVehicle);
router.get("/vehicle/:id", getAllVehicle);
/* End */
export default router;
