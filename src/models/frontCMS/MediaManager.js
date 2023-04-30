import mongoose from "mongoose";

const MediaManagerSchema = new mongoose.Schema({
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
    required: false,
  },
  youtube: {
    type: String,
    required: false,
  },
});

const MediaManagerModel = mongoose.model("MediaManager", MediaManagerSchema);

export default MediaManagerModel;
