import mongoose from "mongoose";

const GenerateCertificatesSchema = new mongoose.Schema({
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
  certificate: {
    type: String,
    required: [true, "certificate id required!"],
  },
  student: {
    type: String,
    required: [true, "student id required!"],
  },
  status: {
    type: String,
    required: [true, "status required!"],
  },
});

const GenerateCertificatesModel = mongoose.model(
  "GenerateCertificates",
  GenerateCertificatesSchema
);

export default GenerateCertificatesModel;
