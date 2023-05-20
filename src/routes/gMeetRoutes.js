import { Router } from "express";

import { authorizedUser } from "../middleware/authentication.js";
import {
  UpdateLiveMeeting,
  createLiveMeeting,
  deleteLiveMeeting,
  getLiveMeeting,
} from "../controllers/gMeet/LiveMeetingControllers.js";
import {
  UpdateLiveClass,
  createLiveClass,
  deleteLiveClass,
  getLiveClass,
} from "../controllers/gMeet/liveClassControllers.js";
import {
  UpdateGMeetSetting,
  gMeetSetting,
  getGMeetSetting,
  liveClassReport,
} from "../controllers/gMeet/LiveClassReportandSetting.js";
const router = Router();
router.use(authorizedUser);

/* live-class */
router.post("/live-class", createLiveClass);
router.delete("/live-class/:id", deleteLiveClass);
router.patch("/live-class/:id", UpdateLiveClass);
router.get("/live-class", getLiveClass);
router.get("/live-class/:id", getLiveClass);
/* End */
/* live-meeting */
router.post("/live-meeting", createLiveMeeting);
router.delete("/live-meeting/:id", deleteLiveMeeting);
router.patch("/live-meeting/:id", UpdateLiveMeeting);
router.get("/live-meeting", getLiveMeeting);
router.get("/live-meeting/:id", getLiveMeeting);
/* End */
/* g-meet-setting */
router.post("/g-meet-setting", gMeetSetting);
router.patch("/g-meet-setting/:id", UpdateGMeetSetting);
router.get("/g-meet-setting/:id", getGMeetSetting);
/* End */
/* live-class-report */
router.get("/live-class-report", liveClassReport);
/* End */
/* live-meeting-report */
router.get("/live-meeting-report", getLiveMeeting);
/* End */

export default router;
