import mongoose from "mongoose";

const promoteStudentSchema = new mongoose.Schema({
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
  student: {
    type: String,
    required: [true, "student required!"],
  },
  class: {
    type: String,
    required: [true, "class name required!"],
  },
  sections: {
    type: String,
    required: [true, "section required!"],
  },
  promoteInSession: {
    type: String,
    required: [true, "promote in session required!"],
  },
  newClass: {
    type: String,
    required: [true, "new class required!"],
  },
  newSection: {
    type: String,
    required: [true, "new section required!"],
  },
  currentResult: {
    type: String,
    required: false,
  },
  nextSessionStatus: {
    type: String,
    required: false,
  },
});

const PromoteStudentModel = mongoose.model(
  "promoteStudent",
  promoteStudentSchema
);

export default PromoteStudentModel;
