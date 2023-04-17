import mongoose from "mongoose";

const StudentAdmissionSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  complaintType: {
    type: String,
    required: [true, "purpose required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
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

const StudentAdmissionModel = mongoose.model(
  "StudentAdmission",
  StudentAdmissionSchema
);

export default StudentAdmissionModel;
