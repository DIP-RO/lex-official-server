import mongoose from "mongoose";

const courseCategorySchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  categoryName: {
    type: String,
    required: [true, "category name required!"],
  },
});

const courseCategoryModel = mongoose.model(
  "Courses-Category",
  courseCategorySchema
);

export default courseCategoryModel;
