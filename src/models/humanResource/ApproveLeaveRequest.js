import mongoose from "mongoose";

const ApproveLeaveRequestSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  role: {
    type: String,
    required: [true, "Role id required!"],
  },
  name: {
    type: String,
    required: [true, "Name id required!"],
  },
  applyDate: {
    type: Date,
    required: true,
  },
  leaveType: {
    type: Date,
    required: true,
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
  note: {
    type: String,
    required: false,
  },
  attachDocument: {
    type: String,
    required: false,
  },
  status: {
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

const ApproveLeaveRequestModel = mongoose.model(
  "approveLeaveRequest",
  ApproveLeaveRequestSchema
);

export default ApproveLeaveRequestModel;
