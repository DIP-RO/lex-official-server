import mongoose from "mongoose";

const onlineExamSchema = new mongoose.Schema({
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
  quiz: {
    type: Boolean,
    required: false,
  },
  examTitle: {
    type: String,
    required: [true, "exam title required!"],
  },
  examFrom: {
    type: String,
    required: [true, "exam from required!"],
  },
  examTo: {
    type: String,
    required: [true, "exam to required!"],
  },
  autoResultPublishDate: {
    type: Date,
    required: false,
  },
  timeDuration: {
    type: String,
    required: false,
  },
  attempt: {
    type: Number,
    required: [true, "attempt required!"],
  },
  passingPercentage: {
    type: Number,
    required: [true, "passing percentage required!"],
  },
  answerWordLimit: {
    type: Number,
    required: [true, "answer word limit required!"],
  },
  publishExam: {
    type: Boolean,
    required: false,
  },
  publishResult: {
    type: Boolean,
    required: false,
  },
  negativeMarking: {
    type: Boolean,
    required: false,
  },
  displayMarkInExam: {
    type: Boolean,
    required: false,
  },
  randomQuestionOrder: {
    type: Boolean,
    required: false,
  },
  description: {
    type: Boolean,
    required: [true, "description required!"],
  },
});

const onlineExamModel = mongoose.model("onlineExam", onlineExamSchema);

export default onlineExamModel;
