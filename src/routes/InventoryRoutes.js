import { Router } from "express";
import {
  createIssueItem,
  deleteIssueItem,
  getAllIssueItem,
} from "../controllers/Inventory/IssueItemControllers.js";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  getAllAddItemStock,
} from "../controllers/Inventory/AddItemStockControllers.js";
import {
  UpdateAddItem,
  createAddItem,
  deleteAddItem,
  getAllAddItem,
} from "../controllers/Inventory/AddItemControllers.js";
import {
  UpdateItemCategory,
  createItemCategory,
  deleteItemCategory,
  getAllItemCategory,
} from "../controllers/Inventory/ItemCategoryControllers.js";
import {
  UpdateItemStore,
  createItemStore,
  deleteItemStore,
  getAllItemStore,
} from "../controllers/Inventory/ItemStoreControllers.js";
import {
  UpdateItemSupplier,
  getAllItemSupplier,
  createItemSupplier,
  deleteItemSupplier,
} from "../controllers/Inventory/ItemSupplierControllers.js";

const router = Router();
/* issue-items */
router.post("/issue-items", createIssueItem);
router.delete("/issue-items/:id", deleteIssueItem);
router.get("/issue-items", getAllIssueItem);
/* End */

/* add-item-stock */
router.post("/add-item-stock", createAdmissionEnquiry);
router.delete("/add-item-stock/:id", deleteAdmissionEnquiry);
router.patch("/add-item-stock/:id", UpdateAdmissionEnquiry);
router.get("/add-item-stock", getAllAddItemStock);
/* End */
/* add-item */
router.post("/add-item", createAddItem);
router.delete("/add-item/:id", deleteAddItem);
router.patch("/add-item/:id", UpdateAddItem);
router.get("/add-item", getAllAddItem);
/* End */
/* item-category */
router.post("/item-category", createItemCategory);
router.delete("/item-category/:id", deleteItemCategory);
router.patch("/item-category/:id", UpdateItemCategory);
router.get("/item-category", getAllItemCategory);
/* End */
/* item-store */
router.post("/item-store", createItemStore);
router.delete("/item-store/:id", deleteItemStore);
router.patch("/item-store/:id", UpdateItemStore);
router.get("/item-store", getAllItemStore);
/* End */
/* item-supplier */
router.post("/item-supplier", createItemSupplier);
router.delete("/item-supplier/:id", deleteItemSupplier);
router.patch("/item-supplier/:id", UpdateItemSupplier);
router.get("/item-supplier", getAllItemSupplier);
/* End */

export default router;
