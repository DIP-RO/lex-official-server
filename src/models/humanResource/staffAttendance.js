import mongoose from "mongoose";

const staffAttendanceSchema = new mongoose.Schema({
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
  staff: {
    type: String,
    required: [true, "staff required!"],
  },
  attendance: {
    type: String,
    required: [true, "attendance required!"],
  },
  note: {
    type: String,
    required: false,
  },
  leaveRequest: {
    type: Boolean,
    required: false,
  },
  approvedLeave: {
    type: Boolean,
    required: false,
  },
});

const staffAttendanceModel = mongoose.model(
  "staffAttendance",
  staffAttendanceSchema
);

export default staffAttendanceModel;
