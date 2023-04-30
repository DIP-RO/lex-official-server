import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: [true, "description required!"],
  },
  image: {
    type: String,
    required: false,
  },
});

const GalleryModel = mongoose.model("Gallery", GallerySchema);

export default GalleryModel;
