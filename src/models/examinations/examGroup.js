import mongoose from "mongoose";

const examGroupSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: [true, "name required!"],
  },
  type: {
    type: String,
    required: [true, "exam type required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const ExamGroupModel = mongoose.model("ExamGroup", examGroupSchema);

export default ExamGroupModel;
