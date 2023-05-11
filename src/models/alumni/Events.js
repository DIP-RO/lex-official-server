import mongoose from "mongoose";

const AlumniEventSchema = new mongoose.Schema({
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
  attachDocument: {
    type: String,
    required: false,
  },
  passOutSession: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: false,
  },
  section: {
    type: String,
    required: false,
  },
  eventFor: {
    type: String,
    required: [true, "event for required!"],
  },
  title: {
    type: String,
    required: [true, "event title required!"],
  },
  fromDate: {
    type: Date,
    required: [true, "event start date required!"],
  },
  toDate: {
    type: Date,
    required: [true, "event end date required!"],
  },
  banner: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  notificationMessage: {
    type: String,
    required: false,
  },
  email: {
    type: Boolean,
    required: false,
  },
  sms: {
    type: Boolean,
    required: false,
  },
  templateID: {
    type: String,
    required: false,
  },
});

const AlumniEventModel = mongoose.model("AlumniEvent", AlumniEventSchema);

export default AlumniEventModel;
