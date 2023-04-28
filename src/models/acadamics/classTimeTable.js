import mongoose from "mongoose";

const classTimeTableSchema = new mongoose.Schema({
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
  teacher: {
    type: String,
    required: [true, "teacher required!"],
  },
  timeFrom: {
    type: String,
    required: [true, "time from required!"],
  },
  timeTo: {
    type: String,
    required: [true, "time to required!"],
  },
  roomNo: {
    type: String,
    required: [true, "room no. required!"],
  },
  day: {
    type: String,
    required: false,
  },
});

const classTimeTableModel = mongoose.model(
  "classTimeTable",
  classTimeTableSchema
);

export default classTimeTableModel;
