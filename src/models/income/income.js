import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
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
  incomeHead: {
    type: String,
    required: [true, "income head id required!"],
  },
  name: {
    type: String,
    required: [true, "income name required!"],
  },
  invoiceNumber: {
    type: Number,
    required: false,
  },
  amount: {
    type: Number,
    required: [true, "amount required!"],
  },
  document: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const incomeModel = mongoose.model("income", incomeSchema);
export default incomeModel;
