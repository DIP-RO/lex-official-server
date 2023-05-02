import { Router } from "express";
import {
  UpdateContentType,
  createContentType,
  deleteContentType,
  getAllContentType,
} from "../controllers/downloadCenter/ContentTypeControllers";
import {
  UpdateUploadContent,
  createUploadContent,
  deleteUploadContent,
  getAllUploadContent,
} from "../controllers/downloadCenter/UploadContentControllers";
const router = Router();

/* content-type */
router.post("/content-type", createContentType);
router.delete("/content-type/:id", deleteContentType);
router.patch("/content-type/:id", UpdateContentType);
router.get("/content-type", getAllContentType);
/* End */
/* upload-content */
router.post("/upload-content", createUploadContent);
router.delete("/upload-content/:id", deleteUploadContent);
router.patch("/upload-content/:id", UpdateUploadContent);
router.get("/upload-content", getAllUploadContent);
/* End */
export default router;
