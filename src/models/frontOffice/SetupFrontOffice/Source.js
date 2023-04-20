import mongoose from "mongoose";

const SourceSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  source: {
    type: String,
    required: [true, "source required!"],
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

const SourceModel = mongoose.model("source", SourceSchema);

export default SourceModel;
