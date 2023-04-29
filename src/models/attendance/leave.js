import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema({
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
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  student: {
    type: String,
    required: [true, "student required!"],
  },
  applyDate: {
    type: Date,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: [true, "reason No required!"],
  },
  leaveStatus: {
    type: String,
    required: [true, "leave status required!"],
  },
  attachDocument: {
    type: String,
    required: false,
  },
  studentName: {
    type: String,
    required: [true, "student name required!"],
  },
  status: {
    type: String,
    required: false,
  },
  approveBy: {
    type: String,
    required: false,
  },
});

const LeaveModel = mongoose.model("leave", LeaveSchema);

export default LeaveModel;
