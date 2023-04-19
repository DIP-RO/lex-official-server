import mongoose from "mongoose";

const BulkDeleteSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  title: {
    type: String,
    required: [true, "Title required!"],
  },
  outcomes: {
    type: String,
    required: [true, "Outcomes required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
  },
  class: {
    type: String,
    required: [true, "Class required!"],
  },
  section: {
    type: String,
    required: [true, "Section required!"],
  },
  assignTeacher: {
    type: String,
    required: [true, "AssignTeacher required!"],
  },
  price: {
    type: String,
    required: [true, "Price required!"],
  },
  courseCategory: {
    type: String,
    required: [true, "CourseCategory required!"],
  },
  frontSiteVisibility: {
    type: String,
    required: true,
  },
  coursePreviewURL: {
    type: String,
    required: false,
  },
  inlinePreviewImage: {
    type: Boolean,
    required: false,
  },
  Discount: {
    type: String,
    required: false,
  },
  FreeCourse: {
    type: String,
    required: false,
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

const BulkDeleteModel = mongoose.model("BulkDelete", BulkDeleteSchema);

export default BulkDeleteModel;
