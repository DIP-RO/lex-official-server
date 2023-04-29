import mongoose from "mongoose";

const IDCardSchema = new mongoose.Schema({
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
  bgImage: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  schoolName: {
    type: String,
    required: [true, "school name required!"],
  },
  addressEmailPhone: {
    type: String,
    required: [true, "address or phone or email required!"],
  },
  title: {
    type: String,
    required: [true, "card title required!"],
  },
  headerColor: {
    type: String,
    required: false,
  },
  admissionNo: {
    type: Boolean,
    required: false,
  },
  StudentName: {
    type: Boolean,
    required: false,
  },
  class: {
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
  studentAddress: {
    type: Boolean,
    required: false,
  },
  phone: {
    type: Boolean,
    required: false,
  },
  dob: {
    type: Boolean,
    required: false,
  },
  bloodGroup: {
    type: Boolean,
    required: false,
  },
  designType: {
    type: Boolean,
    required: false,
  },
  barCode: {
    type: Boolean,
    required: false,
  },
});

const IDCardModel = mongoose.model("IDCard", IDCardSchema);

export default IDCardModel;
