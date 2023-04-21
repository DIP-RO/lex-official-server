import mongoose from "mongoose";

const incomeHeadSchema = new mongoose.Schema({
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
    required: [true, "income head name required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const incomeHeadModel = mongoose.model("incomeHead", incomeHeadSchema);

export default incomeHeadModel;
