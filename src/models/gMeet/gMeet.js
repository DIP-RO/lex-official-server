import mongoose from "mongoose";

const GMeetSchema = new mongoose.Schema({
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
  meetTitle: {
    type: String,
    required: [true, "meet title required!"],
  },
  meetDate: {
    type: Date,
    required: [true, "meet date required!"],
  },
  meetDuration: {
    type: Date,
    required: [true, "meet duration required!"],
  },
  staff: {
    type: String,
    required: [true, "staff required!"],
  },
  class: {
    type: String,
      required: false,
  },
  section: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: [true, "Google Meet link required!"],
  },
  description: {
    type: String,
    required: [true, "Google Meet description required!"],
  },
  status: {
    type: String,
    required: [true, "Google Meet Status required!"],
  },
});

const GMeetModel = mongoose.model("gMeet", GMeetSchema);

export default GMeetModel;