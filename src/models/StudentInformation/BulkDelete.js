import mongoose from "mongoose";

const BulkDeleteSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  complaintType: {
    type: String,
    required: [true, "purpose required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
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

const BulkDeleteModel = mongoose.model("BulkDelete", BulkDeleteSchema);

export default BulkDeleteModel;
