import mongoose from "mongoose";

const SmsTemplateSchema = new mongoose.Schema({
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
    required: [true, "title required!"],
  },
  message: {
    type: String,
    required: [true, "message required!"],
  },
});

const SmsTemplateModel = mongoose.model("SmsTemplate", SmsTemplateSchema);

export default SmsTemplateModel;
