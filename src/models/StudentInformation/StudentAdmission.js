import mongoose from "mongoose";

const StudentAdmissionSchema = new mongoose.Schema({
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
  firstName: {
    type: String,
    required: [true, "first name required!"],
  },
  lastName: {
    type: String,
    required: [true, "last name required!"],
  },
  roll: {
    type: String,
    required: [true, "roll required!"],
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  fatherName: {
    type: String,
    required: [true, "father name required!"],
  },
  dob: {
    type: String,
    required: [true, "date of bath required!"],
  },
  gender: {
    type: String,
    required: [true, "gender required!"],
  },
  category: {
    type: String,
    required: [true, "category required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  email: {
    type: String,
    required: false,
  },
  religion: {
    type: String,
    required: [true, "religion required!"],
  },
  caste: {
    type: String,
    required: [true, "caste required!"],
  },
  photo: {
    type: String,
    required: [true, "photo required!"],
  },
  bloodGroup: {
    type: String,
    required: [true, "blood group required!"],
  },
  house: {
    type: String,
    required: [true, "house required!"],
  },
  height: {
    type: String,
    required: [true, "height required!"],
  },
  weight: {
    type: String,
    required: [true, "weight required!"],
  },
  measurementDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  medicalHistory: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: [true, "status required!"],
  },
});

const StudentAdmissionModel = mongoose.model(
  "StudentAdmission",
  StudentAdmissionSchema
);

export default StudentAdmissionModel;
