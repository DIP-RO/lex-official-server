import { Router } from "express";
import {
  UpdateHostelRoom,
  createHostelRoom,
  deleteHostelRoom,
  getAllHostelRoom,
} from "../controllers/Hostel/HostelRoomsControllers";
import {
  UpdateRoomType,
  createRoomType,
  deleteRoomType,
  getAllRoomType,
} from "../controllers/Hostel/RoomTypeControllers";
import {
  UpdateHostel,
  createHostel,
  deleteHostel,
  getAllHostel,
} from "../controllers/Hostel/HostelControllers";

const router = Router();

/* hostel-rooms */
router.post("/hostel-rooms", createHostelRoom);
router.delete("/hostel-rooms/:id", deleteHostelRoom);
router.delete("/hostel-rooms/:id", UpdateHostelRoom);
router.get("/hostel-rooms", getAllHostelRoom);
/* End */
/* room-type */
router.post("/room-type", createRoomType);
router.delete("/room-type/:id", deleteRoomType);
router.delete("/room-type/:id", UpdateRoomType);
router.get("/room-type", getAllRoomType);
/* End */
/* hostel */
router.post("/hostel", createHostel);
router.delete("/hostel/:id", deleteHostel);
router.delete("/hostel/:id", UpdateHostel);
router.get("/hostel", getAllHostel);
/* End */
export default router;
