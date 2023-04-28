import mongoose from "mongoose";

const designMarksheetSchema = new mongoose.Schema({
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
  template: {
    type: String,
    required: [true, "template required!"],
  },
  examName: {
    type: String,
    required: [true, "exam name required!"],
  },
  schoolName: {
    type: String,
    required: [true, "school name required!"],
  },
  examCenterName: {
    type: String,
    required: [true, "exam center required!"],
  },
  bodyText: {
    type: String,
    required: [true, "body text required!"],
  },
  printDate: {
    type: Date,
    required: false,
  },
  headerImage: {
    type: String,
    required: [true, "header image required!"],
  },
  leftSideLogo: {
    type: String,
    required: [true, "left logo required!"],
  },
  rightSideLogo: {
    type: String,
    required: [true, "right logo required!"],
  },
  leftSign: {
    type: String,
    required: [true, "sign required!"],
  },
  middleSign: {
    type: String,
    required: [true, "sign required!"],
  },
  rightSign: {
    type: String,
    required: [true, "sign required!"],
  },
  bgImage: {
    type: String,
    required: [true, "background images required!"],
  },
  name: {
    type: Boolean,
    required: false,
  },
  fatherName: {
    type: Boolean,
    required: false,
  },
  motherName: {
    type: Boolean,
    required: false,
  },
  examSession: {
    type: Boolean,
    required: false,
  },
  admissionNo: {
    type: Boolean,
    required: false,
  },
  division: {
    type: Boolean,
    required: false,
  },
  rank: {
    type: Boolean,
    required: false,
  },
  roll: {
    type: Boolean,
    required: false,
  },
  photo: {
    type: Boolean,
    required: false,
  },
  class: {
    type: Boolean,
    required: false,
  },
  section: {
    type: Boolean,
    required: false,
  },
  dob: {
    type: Boolean,
    required: false,
  },
  remark: {
    type: Boolean,
    required: false,
  },
});

const DesignMarksheetModel = mongoose.model(
  "designMarksheet",
  designMarksheetSchema
);

export default DesignMarksheetModel;
