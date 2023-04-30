import mongoose from "mongoose";

const BannerImageSchema = new mongoose.Schema({
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
  file: {
    type: String,
    required: [true, "section name required!"],
  },
  fileType: {
    type: String,
    required: [true, "section name required!"],
  },
});

const BannerImageModel = mongoose.model("BannerImage", BannerImageSchema);

export default BannerImageModel;
