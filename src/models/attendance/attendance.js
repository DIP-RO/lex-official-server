import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
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
  student: {
    type: String,
    required: [true, "student required!"],
  },
  attendance: {
    type: String,
    required: [true, "attendance required!"],
  },
  note: {
    type: String,
    required: false,
  },
  appliedLeave: {
    type: Boolean,
    required: false,
  },
  isApproveLeave: {
    type: Boolean,
    required: false,
  },
});

const attendanceModel = mongoose.model("attendance", attendanceSchema);

export default attendanceModel;
