import mongoose from "mongoose";

const PurposeSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  purpose: {
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

const PurposeModel = mongoose.model("purpose", PurposeSchema);

export default PurposeModel;
