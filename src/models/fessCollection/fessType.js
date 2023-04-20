import mongoose from "mongoose";

const fessTypeSchema = new mongoose.Schema({
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
    required: [true, "fees name required!"],
  },
  feesCode: {
    type: String,
    required: [true, "fees code required!"],
  },
  description: {
    type: String,
    required: [true, "fees description required!"],
  },
});

const fessTypeModel = mongoose.model("fessType", fessTypeSchema);

export default fessTypeModel;
