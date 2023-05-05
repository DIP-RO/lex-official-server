import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
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
  expenseHead: {
    type: String,
    required: [true, "expense head id required!"],
  },
  name: {
    type: String,
    required: [true, "expense name required!"],
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
  attachDocument: {
    type: String,
    required: false,
  },
});

const ExpenseModel = mongoose.model("Expense", expenseSchema);
export default ExpenseModel;
