import mongoose from "mongoose";

const admitCardDesignSchema = new mongoose.Schema({
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
  heading: {
    type: String,
    required: [true, "heading required!"],
  },
  title: {
    type: String,
    required: [true, "title required!"],
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
  leftSideLogo: {
    type: String,
    required: [true, "left logo required!"],
  },
  rightSideLogo: {
    type: String,
    required: [true, "right logo required!"],
  },
  sign: {
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
  dob: {
    type: Boolean,
    required: false,
  },
  admissionNo: {
    type: Boolean,
    required: false,
  },
  roll: {
    type: Boolean,
    required: false,
  },
  address: {
    type: Boolean,
    required: false,
  },
  gender: {
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
});

const admitCardDesignModel = mongoose.model("fessType", admitCardDesignSchema);

export default admitCardDesignModel;
