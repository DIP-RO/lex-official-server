import mongoose from "mongoose";

const ApplyLeaveSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  applyDate: {
    type: Date,
    required: true,
  },
  availableLeave: {
    type: String,
    required: [true, "Available Leave id required!"],
  },
  leaveFromDate: {
    type: Date,
    required: true,
  },
  leaveToDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: false,
  },
  attachDocument: {
    type: String,
    required: false,
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

const ApplyLeaveModel = mongoose.model("applyLeave", ApplyLeaveSchema);

export default ApplyLeaveModel;
