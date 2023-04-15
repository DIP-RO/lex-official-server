import mongoose from "mongoose";

const ReferenceSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  reference: {
    type: String,
    required: [true, "purpose required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
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

const ReferenceModel = mongoose.model("reference", ReferenceSchema);

export default ReferenceModel;
