import mongoose from "mongoose";

const FeesMasterSchema = new mongoose.Schema({
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
  month: {
    type: String,
    required: [true, "month required!"],
  },
  dueDate: {
    type: Date,
    required: [true, "date required!"],
  },
  fineType: {
    type: Boolean,
    required: false,
  },
  percentage: {
    type: String,
    required: false,
  },
  fixAmount: {
    type: String,
    required: false,
  },
});

const FeesMasterModel = mongoose.model("FeesMaster", FeesMasterSchema);

export default FeesMasterModel;
