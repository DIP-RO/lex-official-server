import { Router } from "express";
import { createLawData, deleteLawData, getAllLawData , getLawDataById, updateLawData } from "../controllers/LawDataControllers.js";

const router = Router();

// Create a new lawData
router.post("/lawData", createLawData);

// Delete a lawData by ID
router.delete("/lawData/:id", deleteLawData);

// Get all lawData
router.get("/lawData", getAllLawData);

// Get a lawData by ID
router.get("/lawData/:id", getLawDataById);

// Update a lawData by ID
router.patch("/lawData/:id", updateLawData);
export default router;
