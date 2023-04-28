import mongoose from "mongoose";

const incidentsSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: [true, "incidents name required!"],
  },
  points: {
    type: String,
    required: [true, "incidents points required!"],
  },
  isNegative: {
    type: Boolean,
    required: false,
  },
  description: {
    type: Boolean,
    required: [true, "description required!"],
  },
  studentID: {
    type: Boolean,
    required: [true, "student id required!"],
  },
});

const incidentsModel = mongoose.model("behaviour", incidentsSchema);

export default incidentsModel;