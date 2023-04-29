import mongoose from "mongoose";

const EmailTemplateSchema = new mongoose.Schema({
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
  attachedFile: {
    type: String,
    required: [true, "attached file required!"],
  },
  message: {
    type: String,
    required: [true, "attached file required!"],
  },
});

const EmailTemplateModel = mongoose.model("EmailTemplate", EmailTemplateSchema);

export default EmailTemplateModel;
