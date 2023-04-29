import mongoose from "mongoose";

const classTeacherSchema = new mongoose.Schema({
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
  class: {
    type: String,
    required: [true, "class name required!"],
  },
  section: {
    type: String,
    required: [true, "section name required!"],
  },
  classTeacher: {
    type: String,
    required: [true, "class teacher required!"],
  },
});

const ClassTeacherModel = mongoose.model("classTeacher", classTeacherSchema);

export default ClassTeacherModel;
