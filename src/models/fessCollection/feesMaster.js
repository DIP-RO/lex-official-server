import mongoose from "mongoose";

const fessMasterSchema = new mongoose.Schema({
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
  feesGroup: {
    type: String,
    required: [true, "fees group id required!"],
  },
  feesType: {
    type: String,
    required: [true, "fees type id required!"],
  },
  dueDate: {
    type: Date,
    required: [true, "due date required!"],
  },
  amount: {
    type: String,
    required: [true, "fees amount required!"],
  },
  fineType: {
    type: String,
    required: false,
  },
  fineAmount: {
    type: Number,
    required: false,
  },
});

const fessMasterModel = mongoose.model("fessMaster", fessMasterSchema);

export default fessMasterModel;
