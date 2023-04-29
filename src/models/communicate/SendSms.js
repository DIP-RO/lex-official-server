import mongoose from "mongoose";

const SmsSchema = new mongoose.Schema({
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
  template: {
    type: String,
    required: [true, "sms template required!"],
  },
  title: {
    type: String,
    required: [true, "sms title required!"],
  },
  sendThrough: {
    type: String,
    required: [true, "sms sending method required!"],
  },
  templateID: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  messageTo: {
    type: String,
    required: [true, "message to required!"],
  },
  sendNow: {
    type: Boolean,
    required: [true, "send now required!"],
  },
  scheduleDate: {
    type: Boolean,
    required: [true, "schedule date required!"],
  },
  status: {
    type: Boolean,
    required: [true, "status required!"],
  },
});

const SmsModel = mongoose.model("Sms", SmsSchema);

export default SmsModel;
