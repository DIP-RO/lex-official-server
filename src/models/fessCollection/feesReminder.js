import mongoose from "mongoose";

const fessReminderSchema = new mongoose.Schema({
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
  reminderType: {
    type: String,
    required: [true, "fees reminder type required!"],
  },
  days: {
    type: Date,
    required: [true, "fees reminder date required!"],
  },
  status: {
    type: String,
    required: [true, "fees reminder status required!"],
  },
  fessMaster: {
    type: String,
    required: [true, "fees master id required!"],
  },
});

const fessReminderModel = mongoose.model("fessReminder", fessReminderSchema);

export default fessReminderModel;
