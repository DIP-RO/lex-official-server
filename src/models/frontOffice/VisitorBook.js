import mongoose from "mongoose";

const VisitorBookSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  purpose: {
    type: String,
    required: [true, "purpose required!"],
  },
  meetingWith: {
    type: String,
    required: [true, "meetingWith required!"],
  },
  visitorName: {
    type: String,
    required: [true, "visitorName required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  idCard: {
    type: String,
    required: [true, "idCard required!"],
  },
  numberOfPerson: {
    type: String,
    required: [true, "numberOfPerson required!"],
  },
  date: {
    type: Date,
    required: true,
  },
  inTime: {
    type: Date,
    required: false,
  },
  outTime: {
    type: Date,
    required: false,
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
});

const VisitorBookModel = mongoose.model("VisitorBook", VisitorBookSchema);

export default VisitorBookModel;
