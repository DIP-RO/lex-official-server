import { Router } from "express";
import {
  UpdateAddItem,
  createAddItem,
  deleteAddItem,
  getAllAddItem,
} from "../controllers/Inventory/AddItemControllers.js";
import {
  UpdateAdmissionEnquiry,
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  getAllAddItemStock,
} from "../controllers/Inventory/AddItemStockControllers.js";
import {
  createIssueItem,
  deleteIssueItem,
  getAllIssueItem,
} from "../controllers/Inventory/IssueItemControllers.js";
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
  createItemSupplier,
  deleteItemSupplier,
  getAllItemSupplier,
} from "../controllers/Inventory/ItemSupplierControllers.js";
import { uploadAddItemStockFiles } from "../middleware/InventoryFile.js";
import { authorizedUser } from "../middleware/authentication.js";

const router = Router();
router.use(authorizedUser)
/* issue-items */
router.post("/issue-items", createIssueItem);
router.delete("/issue-items/:id", deleteIssueItem);
router.get("/issue-items", getAllIssueItem);
router.get("/issue-items/:id", getAllIssueItem);
/* End */

/* add-item-stock */
router.post(
  "/add-item-stock",
  uploadAddItemStockFiles.single("attachDocument"),
  createAdmissionEnquiry
);
router.delete("/add-item-stock/:id", deleteAdmissionEnquiry);
router.patch("/add-item-stock/:id", UpdateAdmissionEnquiry);
router.get("/add-item-stock", getAllAddItemStock);
router.get("/add-item-stock/:id", getAllAddItemStock);
/* End */
/* add-item */
router.post("/add-item", createAddItem);
router.delete("/add-item/:id", deleteAddItem);
router.patch("/add-item/:id", UpdateAddItem);
router.get("/add-item", getAllAddItem);
router.get("/add-item/:id", getAllAddItem);
/* End */
/* item-category */
router.post("/item-category", createItemCategory);
router.delete("/item-category/:id", deleteItemCategory);
router.patch("/item-category/:id", UpdateItemCategory);
router.get("/item-category", getAllItemCategory);
router.get("/item-category/:id", getAllItemCategory);
/* End */
/* item-store */
router.post("/item-store", createItemStore);
router.delete("/item-store/:id", deleteItemStore);
router.patch("/item-store/:id", UpdateItemStore);
router.get("/item-store", getAllItemStore);
router.get("/item-store/:id", getAllItemStore);
/* End */
/* item-supplier */
router.post("/item-supplier", createItemSupplier);
router.delete("/item-supplier/:id", deleteItemSupplier);
router.patch("/item-supplier/:id", UpdateItemSupplier);
router.get("/item-supplier", getAllItemSupplier);
router.get("/item-supplier/:id", getAllItemSupplier);
/* End */

export default router;
