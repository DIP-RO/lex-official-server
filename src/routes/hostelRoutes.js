import { Router } from "express";
import {
  UpdateHostel,
  createHostel,
  deleteHostel,
  getAllHostel,
} from "../controllers/Hostel/HostelControllers.js";
import {
  UpdateHostelRoom,
  createHostelRoom,
  deleteHostelRoom,
  getAllHostelRoom,
} from "../controllers/Hostel/HostelRoomsControllers.js";
import {
  UpdateRoomType,
  createRoomType,
  deleteRoomType,
  getAllRoomType,
} from "../controllers/Hostel/RoomTypeControllers.js";

const router = Router();

/* hostel-rooms */
router.post("/hostel-rooms", createHostelRoom);
router.delete("/hostel-rooms/:id", deleteHostelRoom);
router.patch("/hostel-rooms/:id", UpdateHostelRoom);
router.get("/hostel-rooms", getAllHostelRoom);
router.get("/hostel-rooms/:id", getAllHostelRoom);
/* End */
/* room-type */
router.post("/room-type", createRoomType);
router.delete("/room-type/:id", deleteRoomType);
router.patch("/room-type/:id", UpdateRoomType);
router.get("/room-type", getAllRoomType);
router.get("/room-type/:id", getAllRoomType);
/* End */
/* hostel */
router.post("/hostel", createHostel);
router.delete("/hostel/:id", deleteHostel);
router.patch("/hostel/:id", UpdateHostel);
router.get("/hostel", getAllHostel);
router.get("/hostel/:id", getAllHostel);
/* End */
export default router;
