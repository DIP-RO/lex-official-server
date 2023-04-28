import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
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
  role: {
    type: String,
    required: [true, "role required!"],
  },
  designation: {
    type: String,
    required: [true, "designation required!"],
  },
  department: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: [true, "first name required!"],
  },
  lastName: {
    type: String,
    required: [true, "last name required!"],
  },
  fatherName: {
    type: String,
    required: [true, "father name required!"],
  },
  motherName: {
    type: String,
    required: [true, "mother name required!"],
  },
  email: {
    type: String,
    required: [true, "email required! used for login"],
  },
  gender: {
    type: String,
    required: [true, "gender required!"],
  },
  dob: {
    type: String,
    required: [true, "date of birth required!"],
  },
  doj: {
    type: String,
    required: [true, "date of joining required!"],
  },
  phone: {
    type: String,
    required: false,
  },
  emergencyContactNumber: {
    type: String,
    required: false,
  },
  maritalStatus: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  permanentAddress: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: false,
  },
  workExperience: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  panNumber: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: [true, "status required!"],
  },
});

const staffModel = mongoose.model("staff", staffSchema);

export default staffModel;
