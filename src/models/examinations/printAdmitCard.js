import mongoose from "mongoose";

const printAdmitCardSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: [true, "fees name required!"],
  },
  feesCode: {
    type: String,
    required: [true, "fees code required!"],
  },
  description: {
    type: String,
    required: [true, "fees description required!"],
  },
});

const printAdmitCardModel = mongoose.model("printCard", printAdmitCardSchema);

export default printAdmitCardModel;
