import mongoose from "mongoose";

const StudentCertificatesSchema = new mongoose.Schema({
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
    required: [true, "certificate name required!"],
  },
  headerLeftText: {
    type: String,
    required: [true, "header text required!"],
  },
  headerCenterText: {
    type: String,
    required: [true, "header center text required!"],
  },
  headerRightText: {
    type: String,
    required: [true, "header right text required!"],
  },
  bodyText: {
    type: String,
    required: [true, "body text required!"],
  },
  footerLeftText: {
    type: String,
    required: [true, "footer left text required!"],
  },
  footerCenterText: {
    type: String,
    required: [true, "footer center text required!"],
  },
  footerRightText: {
    type: String,
    required: [true, "footer right text required!"],
  },
  headerHeight: {
    type: String,
    required: false,
  },
  footerHeight: {
    type: String,
    required: false,
  },
  bodyHeight: {
    type: String,
    required: false,
  },
  bodyWidth: {
    type: String,
    required: false,
  },
  bgImage: {
    type: String,
    required: false,
  },
});

const StudentCertificatesModel = mongoose.model(
  "StudentCertificates",
  StudentCertificatesSchema
);

export default StudentCertificatesModel;
