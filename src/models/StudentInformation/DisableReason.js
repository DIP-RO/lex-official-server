import mongoose from "mongoose";

const DisableReasonSchema = new mongoose.Schema({
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
  DisableReason: {
    type: String,
    required: [true, "disable reason required!"],
  },
});

const DisableReasonModel = mongoose.model("DisableReason", DisableReasonSchema);

export default DisableReasonModel;
