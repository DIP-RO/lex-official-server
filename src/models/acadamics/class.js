import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
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
    required: [true, "class name required!"],
  },
  section: {
    type: String,
    required: [true, "section name required!"],
  },
});

const classModel = mongoose.model("class", classSchema);

export default classModel;
