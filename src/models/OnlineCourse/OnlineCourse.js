import mongoose from "mongoose";

const onlineCourseSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: [true, "title required!"],
  },
  thumbnail: {
    type: String,
    required: [true, "thumbnail required!"],
  },
  outcomes: {
    type: String,
    required: [true, "outcomes required!"],
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
  },
  assignTeacher: {
    type: String,
    required: [true, "assign teacher required!"],
  },
  previewUrl: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: [true, "price required!"],
  },
  discount: {
    type: Number,
    required: [true, "discount required!"],
  },
  is_free: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: [true, "category required!"],
  },
  frontSiteVisibility: {
    type: String,
    required: [true, "front site visibility required!"],
  },
});

const onlineCourseModel = mongoose.model("Online-Courses", onlineCourseSchema);

export default onlineCourseModel;
