import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
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
    required: [true, "section name required!"],
  },
  pageType: {
    type: String,
    required: [true, "section name required!"],
  },
  description: {
    type: String,
    required: [true, "Description name required!"],
  },
});

const PageModel = mongoose.model("Page", PageSchema);

export default PageModel;