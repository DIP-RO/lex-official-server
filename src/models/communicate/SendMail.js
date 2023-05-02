import mongoose from "mongoose";

const SendMailSchema = new mongoose.Schema({
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
    required: [true, "email template required!"],
  },
  title: {
    type: String,
    required: [true, "email title required!"],
  },
  attachedFile: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: [true, "email message required!"],
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
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: [true, "status required!"],
  },
});

const SendMailModel = mongoose.model("SendMail", SendMailSchema);
export default SendMailModel;
