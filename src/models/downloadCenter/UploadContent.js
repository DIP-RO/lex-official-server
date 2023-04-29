import mongoose from "mongoose";

const UploadContentSchema = new mongoose.Schema({
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
  contentType: {
    type: String,
    required: [true, "content type required!"],
  },
  uploadedFile: {
    type: String,
    required: false,
  },
  uploadedVideoLink: {
    type: String,
    required: false,
  },
});

const UploadContentModel = mongoose.model("UploadContent", UploadContentSchema);

export default UploadContentModel;
