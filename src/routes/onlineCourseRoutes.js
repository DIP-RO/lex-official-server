import { Router } from "express";
import {
  UpdateOfflinePayment,
  createOfflinePayment,
  deleteOfflinePayment,
  getAllOfflinePayment,
} from "../controllers/OnlineCourse/OflinePaymentsControllers.js";
import {
  UpdateOnlineCourse,
  createOnlineCourse,
  deleteOnlineCourse,
  getAllOnlineCourse,
} from "../controllers/OnlineCourse/OnlineCourseControllers.js";
import {
  UpdateCourseCategory,
  createCourseCategory,
  deleteCourseCategory,
  getAllCourseCategory,
} from "../controllers/OnlineCourse/courseCategoryControllers.js";
import {
  UpdateSetting,
  createSetting,
  deleteSetting,
  getAllSetting,
} from "../controllers/OnlineCourse/settingControllers.js";
import { uploadOnlineCourseFiles } from "../middleware/OnlineCourseFile.js";
import { authorizedUser } from "../middleware/authentication.js";

const router = Router();
router.use(authorizedUser)
/*course-category */
router.post(
  "/course-category",
  uploadOnlineCourseFiles.single("attachDocument"),
  createCourseCategory
);
router.delete("/course-category/:id", deleteCourseCategory);
router.patch("/course-category/:id", UpdateCourseCategory);
router.get("/course-category", getAllCourseCategory);
router.get("/course-category/:id", getAllCourseCategory);
/* End */
/*offline-payment */
router.post("/offline-payment", createOfflinePayment);
router.delete("/offline-payment/:id", deleteOfflinePayment);
router.patch("/offline-payment/:id", UpdateOfflinePayment);
router.get("/offline-payment", getAllOfflinePayment);
router.get("/offline-payment/:id", getAllOfflinePayment);
/* End */
/*online-course */
router.post("/online-course", createOnlineCourse);
router.delete("/online-course/:id", deleteOnlineCourse);
router.patch("/online-course/:id", UpdateOnlineCourse);
router.get("/online-course", getAllOnlineCourse);
router.get("/online-course/:id", getAllOnlineCourse);
/* End */
/*online-course-setting */
router.post("/online-course-setting", createSetting);
router.delete("/online-course-setting/:id", deleteSetting);
router.patch("/online-course-setting/:id", UpdateSetting);
router.get("/online-course-setting", getAllSetting);
router.get("/online-course-setting/:id", getAllSetting);
/* End */
export default router;
