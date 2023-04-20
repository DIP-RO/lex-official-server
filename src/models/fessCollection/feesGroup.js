import mongoose from "mongoose";

const fessGroupSchema = new mongoose.Schema({
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
    required: [true, "fees group name required!"],
  },
  description: {
    type: String,
    required: [true, "fees group description required!"],
  },
});

const fessGroupModel = mongoose.model("fessGroup", fessGroupSchema);

export default fessGroupModel;
