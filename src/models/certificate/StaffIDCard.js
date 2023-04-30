import mongoose from "mongoose";

const StaffIDCardSchema = new mongoose.Schema({
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
  StaffName: {
    type: Boolean,
    required: false,
  },
  StaffID: {
    type: Boolean,
    required: false,
  },
  designation: {
    type: Boolean,
    required: false,
  },
  department: {
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
  currentAddress: {
    type: Boolean,
    required: false,
  },
  dateOfJoining: {
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
  designType: {
    type: Boolean,
    required: false,
  },
  barCode: {
    type: Boolean,
    required: false,
  },
});

const StaffIDCardModel = mongoose.model("StaffIDCard", StaffIDCardSchema);

export default StaffIDCardModel;
