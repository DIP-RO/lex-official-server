import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
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
    required: [true, "subject name required!"],
  },
  subjectType: {
    type: String,
    required: [true, "subject type required!"],
  },
  subjectCode: {
    type: String,
    required: [true, "subject code required!"],
  },
});

const SubjectModel = mongoose.model("subject", subjectSchema);

export default SubjectModel;
