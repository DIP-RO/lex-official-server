// reviewRoutes.js
import { Router } from "express";
import {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
  getReviewByEmail
} from "../controllers/ReviewControllers.js";

const router = Router();

router.post("/reviews", createReview);
router.get("/reviews", getReviews);
router.get("/reviews/:id", getReviewById); // Get a review by ID
router.patch("/reviews/:id", updateReview); // Update a review by ID
router.delete("/reviews/:id", deleteReview); // Delete a review by ID
router.delete("/reviews/:email", getReviewByEmail); // Delete a review by email

export default router;
