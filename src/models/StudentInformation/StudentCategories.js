import mongoose from "mongoose";

const StudentCategoriesSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  category: {
    type: String,
    required: [true, "category required!"],
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
});

const StudentCategoriesModel = mongoose.model(
  "StudentCategories",
  StudentCategoriesSchema
);

export default StudentCategoriesModel;
