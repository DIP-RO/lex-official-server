import mongoose from "mongoose";

const studentAttendanceSchema = new mongoose.Schema({
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
  attendanceDate: {
    type: Date,
    required: true,
  },
  admissionNo: {
    type: String,
    required: [true, "admission No required!"],
  },
  rollNumber: {
    type: String,
    required: [true, "roll number required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  attendance: {
    type: String,
    required: [true, "attendance required!"],
  },
  note: {
    type: String,
    required: false,
  },
});

const StudentAttendanceModel = mongoose.model("studentAttendance", studentAttendanceSchema);

export default StudentAttendanceModel;
