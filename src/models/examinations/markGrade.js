import mongoose from "mongoose";

const markGradeSchema = new mongoose.Schema({
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
  examType: {
    type: String,
    required: [true, "exam type required!"],
  },
  name: {
    type: String,
    required: [true, "grade name required!"],
  },
  upto: {
    type: String,
    required: [true, "percent upto required!"],
  },
  from: {
    type: String,
    required: [true, "percent from required!"],
  },
  gradePoint: {
    type: String,
    required: [true, "grade point required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const MarkGradeModel = mongoose.model("markGrade", markGradeSchema);

export default MarkGradeModel;
