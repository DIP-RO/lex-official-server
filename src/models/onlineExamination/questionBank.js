import mongoose from "mongoose";

const questionBankSchema = new mongoose.Schema({
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
  subject: {
    type: String,
    required: [true, "subject required!"],
  },
  type: {
    type: String,
    required: [true, "question type required!"],
  },
  level: {
    type: String,
    required: [true, "question level required!"],
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  question: {
    type: String,
    required: [true, "question required!"],
  },
});

const QuestionBankModel = mongoose.model("questionBank", questionBankSchema);

export default QuestionBankModel;
