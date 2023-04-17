import mongoose from "mongoose";

const DisableReasonSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  DisableReason: {
    type: String,
    required: [true, "DisableReason required!"],
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

const DisableReasonModel = mongoose.model("DisableReason", DisableReasonSchema);

export default DisableReasonModel;
