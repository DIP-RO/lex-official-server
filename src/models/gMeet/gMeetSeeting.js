import mongoose from "mongoose";

const GMeetSettingSchema = new mongoose.Schema({
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
  apiKey: {
    type: String,
    required: [true, "class title required!"],
  },
  apiSecret: {
    type: String,
    required: [true, "class title required!"],
  },
  useGoogleCalendarApi: {
    type: Boolean,
    required: [true, "use Google Calendar Api required!"],
  },
  version: {
    type: String,
    required: false,
  },
});

const GMeetSettingModel = mongoose.model("GMeetSetting", GMeetSettingSchema);

export default GMeetSettingModel;
