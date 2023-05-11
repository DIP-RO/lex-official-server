import mongoose from "mongoose";

const HomeworkSchema = new mongoose.Schema({
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
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  subjectGroup: {
    type: String,
    required: [true, "subject group required!"],
  },
  subject: {
    type: String,
    required: [true, "subject required!"],
  },
  homeworkDate: {
    type: Date,
    required: [true, "homework date required!"],
  },
  submitDate: {
    type: Date,
    required: [true, "submit date required!"],
  },
  maxMark: {
    type: String,
    required: false,
  },
  attachedFiles: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: [true, "description required!"],
  },
  attachDocument: {
    type: String,
    required: false,
  },
});

const HomeworkModel = mongoose.model("Homework", HomeworkSchema);

export default HomeworkModel;
