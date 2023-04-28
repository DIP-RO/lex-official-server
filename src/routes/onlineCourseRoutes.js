import { Router } from "express";
import { UpdateCourseCategory, createCourseCategory, deleteCourseCategory, getAllCourseCategory } from "../controllers/OnlineCourse/courseCategoryControllers.js";
import { UpdateOfflinePayment, createOfflinePayment, deleteOfflinePayment, getAllOfflinePayment } from "../controllers/OnlineCourse/OflinePaymentsControllers.js";
import { UpdateOnlineCourse, createOnlineCourse, deleteOnlineCourse, getAllOnlineCourse } from "../controllers/OnlineCourse/OnlineCourseControllers.js";
import { UpdateSetting, createSetting, deleteSetting, getAllSetting } from "../controllers/OnlineCourse/settingControllers.js";

const router = Router();
/*course-category */
router.post("/course-category", createCourseCategory);
router.delete("/course-category/:id", deleteCourseCategory);
router.delete("/course-category/:id", UpdateCourseCategory);
router.get("/course-category", getAllCourseCategory);
/* End */
/*offline-payment */
router.post("/offline-payment", createOfflinePayment);
router.delete("/offline-payment/:id", deleteOfflinePayment);
router.delete("/offline-payment/:id", UpdateOfflinePayment);
router.get("/offline-payment", getAllOfflinePayment);
/* End */
/*online-course */
router.post("/online-course", createOnlineCourse);
router.delete("/online-course/:id", deleteOnlineCourse);
router.delete("/online-course/:id", UpdateOnlineCourse);
router.get("/online-course", getAllOnlineCourse);
/* End */
/*online-course-setting */
router.post("/online-course-setting", createSetting);
router.delete("/online-course-setting/:id", deleteSetting);
router.delete("/online-course-setting/:id", UpdateSetting);
router.get("/online-course-setting", getAllSetting);
/* End */
export default router;