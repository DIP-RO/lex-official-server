import { Router } from "express";
import {
  UpdateBannerImage,
  createBannerImage,
  deleteBannerImage,
  getAllBannerImage,
} from "../controllers/frontCMS/BannerImageController.js";
import {
  UpdateEvent,
  createEvent,
  deleteEvent,
  getAllEvent,
} from "../controllers/frontCMS/EventController.js";
import {
  UpdateGallery,
  createGallery,
  deleteGallery,
  getAllGallery,
} from "../controllers/frontCMS/GalleryController.js";
import {
  UpdateMediaManager,
  createMediaManager,
  deleteMediaManager,
  getAllMediaManager,
} from "../controllers/frontCMS/MediaManagerController.js";
import {
  UpdateNews,
  createNews,
  deleteNews,
  getAllNews,
} from "../controllers/frontCMS/NewsController.js";
const router = Router();

/* banner-image */
router.post("/banner-image", createBannerImage);
router.delete("/banner-image/:id", deleteBannerImage);
router.patch("/banner-image/:id", UpdateBannerImage);
router.get("/banner-image", getAllBannerImage);
/* End */
/* event */
router.post("/event", createEvent);
router.delete("/event/:id", deleteEvent);
router.patch("/event/:id", UpdateEvent);
router.get("/event", getAllEvent);
/* End */
/* gallery */
router.post("/gallery", createGallery);
router.delete("/gallery/:id", deleteGallery);
router.patch("/gallery/:id", UpdateGallery);
router.get("/gallery", getAllGallery);
/* End */
/*median-manager */
router.post("/median-manager", createMediaManager);
router.delete("/median-manager/:id", deleteMediaManager);
router.patch("/median-manager/:id", UpdateMediaManager);
router.get("/median-manager", getAllMediaManager);
/* End */
/*news */
router.post("/news", createNews);
router.delete("/news/:id", deleteNews);
router.patch("/news/:id", UpdateNews);
router.get("/news", getAllNews);
/* End */
export default router;
