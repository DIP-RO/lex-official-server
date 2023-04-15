import mongoose from "mongoose";

const complainSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  complainType: {
    type: String,
    required: [true, "complain type required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
  },
  complainBy: {
    type: String,
    required: [true, "complain by required!"],
  },
  source: {
    type: String,
    required: [true, "source required!"],
  },
  actionTaken: {
    type: String,
    required: false,
  },
  assigned: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  attachDocument: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
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

const complainModel = mongoose.model("complain", complainSchema);

export default complainModel;
