import { Router } from "express";
import {
  UpdateContentType,
  createContentType,
  deleteContentType,
  getAllContentType,
} from "../controllers/downloadCenter/ContentTypeControllers.js";
import {
  UpdateUploadContent,
  createUploadContent,
  deleteUploadContent,
  getAllUploadContent,
} from "../controllers/downloadCenter/UploadContentControllers.js";
import {
  UpdateVideoTutorial,
  createVideoTutorial,
  deleteVideoTutorial,
  getAllVideoTutorial,
} from "../controllers/downloadCenter/VideoTutorialControllers.js";
import { authorizedUser } from "../middleware/authentication.js";
const router = Router();
// router.use(authorizedUser)

/* content-type */
router.post("/content-type", createContentType);
router.delete("/content-type/:id", deleteContentType);
router.patch("/content-type/:id", UpdateContentType);
router.get("/content-type", getAllContentType);
router.get("/content-type/:id", getAllContentType);
/* End */
/* upload-content */
router.post("/upload-content", createUploadContent);
router.delete("/upload-content/:id", deleteUploadContent);
router.patch("/upload-content/:id", UpdateUploadContent);
router.get("/upload-content", getAllUploadContent);
router.get("/upload-content/:id", getAllUploadContent);
/* End */
/* video-tutorial */
router.post("/video-tutorial", createVideoTutorial);
router.delete("/video-tutorial/:id", deleteVideoTutorial);
router.patch("/video-tutorial/:id", UpdateVideoTutorial);
router.get("/video-tutorial", getAllVideoTutorial);
router.get("/video-tutorial/:id", getAllVideoTutorial);
/* End */
export default router;
