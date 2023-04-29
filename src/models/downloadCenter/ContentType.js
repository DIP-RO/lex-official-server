import mongoose from "mongoose";

const ContentTypeSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: [true, "content type name required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const ContentTypeModel = mongoose.model("ContentType", ContentTypeSchema);

export default ContentTypeModel;
