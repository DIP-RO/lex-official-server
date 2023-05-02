import mongoose from "mongoose";

const leaveTypeSchema = new mongoose.Schema({
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
    required: [true, "name required!"],
  },
});

const LeaveTypeModel = mongoose.model("leaveType", leaveTypeSchema);

export default LeaveTypeModel;
