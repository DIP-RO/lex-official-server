import mongoose from "mongoose";

const subjectGroupSchema = new mongoose.Schema({
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
    required: [true, "subject group name required!"],
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  subject: {
    type: String,
    required: [true, "subjects required!"],
  },
});

const SubjectGroupModel = mongoose.model("subjectGroup", subjectGroupSchema);

export default SubjectGroupModel;
