import { Router } from "express";
import { UpdateFeesMaster, createFeesMaster, deleteFeesMaster, getAllFeesMaster } from "../controllers/fessCollection/FeesMasterControllers.js";
import { UpdateFeesGroup, createFeesGroup, deleteFeesGroup, getAllFeesGroup } from "../controllers/fessCollection/feesGroupControllers.js";
import { UpdateFeesType, createFeesType, deleteFeesType, getAllFeesType } from "../controllers/fessCollection/fessTypeControllers.js";
import { UpdateFeesDiscount, createFeesDiscount, deleteFeesDiscount, getAllFeesDiscount } from "../controllers/fessCollection/feesDiscountControllers.js";

const router = Router();

/* fees-master */
router.post("/fees-master", createFeesMaster);
router.delete("/fees-master/:id", deleteFeesMaster);
router.patch("/fees-master/:id", UpdateFeesMaster);
router.get("/fees-master", getAllFeesMaster);
/* End */
/* fees-group */
router.post("/fees-group", createFeesGroup);
router.delete("/fees-group/:id", deleteFeesGroup);
router.patch("/fees-group/:id", UpdateFeesGroup);
router.get("/fees-group", getAllFeesGroup);
/* End */
/* fees-type */
router.post("/fees-type", createFeesType);
router.delete("/fees-type/:id", deleteFeesType);
router.patch("/fees-type/:id", UpdateFeesType);
router.get("/fees-type", getAllFeesType);
/* End */
/* fees-discount */
router.post("/fees-discount", createFeesDiscount);
router.delete("/fees-discount/:id", deleteFeesDiscount);
router.patch("/fees-discount/:id", UpdateFeesDiscount);
router.get("/fees-discount", getAllFeesDiscount);
/* End */
export default router;