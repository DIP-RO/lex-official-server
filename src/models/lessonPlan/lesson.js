import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
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
  lessonName: {
    type: String,
    required: [true, "lesson name required!"],
  },
});

const LessonModel = mongoose.model("lesson", lessonSchema);

export default LessonModel;
