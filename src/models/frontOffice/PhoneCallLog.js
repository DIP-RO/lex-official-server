import mongoose from "mongoose";

const PhoneCallLogSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  callTypes: {
    type: String,
    required: [true, "callType required!"],
  },
  date: {
    type: Date,
    required: true,
  },
  nextFollowUpData: {
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
});

const PhoneCallLogModel = mongoose.model("PhoneCallLog", PhoneCallLogSchema);

export default PhoneCallLogModel;
