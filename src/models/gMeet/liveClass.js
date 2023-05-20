import mongoose from "mongoose";

const LiveClassSchema = new mongoose.Schema({
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
  classTitle: {
    type: String,
    required: [true, "class title required!"],
  },
  classDate: {
    type: Date,
    required: [true, "class date required!"],
  },
  classDuration: {
    type: Date,
    required: [true, "class duration required!"],
  },
  staff: {
    type: String,
    required: [true, "staff required!"],
  },
  role: {
    type: String,
    required: [true, "role required!"],
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  url: {
    type: String,
    required: [true, "Google Meet link required!"],
  },
  description: {
    type: String,
    required: [true, "Google Meet description required!"],
  },
});

const LiveClassModel = mongoose.model("lineClass", LiveClassSchema);

export default LiveClassModel;
