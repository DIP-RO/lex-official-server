import mongoose from "mongoose";

const expenseHeadSchema = new mongoose.Schema({
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
    required: [true, "expense head name required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const expenseHeadModel = mongoose.model("expenseHead", expenseHeadSchema);

export default expenseHeadModel;
