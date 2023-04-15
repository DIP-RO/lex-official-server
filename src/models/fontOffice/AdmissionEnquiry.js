import mongoose from "mongoose";

const AdmissionEnquirySchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  source: {
    type: String,
    required: [true, "source required!"],
  },
  enquiryData: {
    type: Date,
    required: false,
  },
  lastFollowUpData: {
    type: Date,
    required: false,
  },
  nextFollowUpData: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    required: [true, "status required!"],
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

const AdmissionEnquiryModel = mongoose.model(
  "AdmissionEnquiry",
  AdmissionEnquirySchema
);

export default AdmissionEnquiryModel;
