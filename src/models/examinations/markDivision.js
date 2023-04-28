import mongoose from "mongoose";

const markDivisionSchema = new mongoose.Schema({
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
    required: [true, "division name required!"],
  },
  percentFrom: {
    type: String,
    required: [true, "percent from required!"],
  },
  percentUpto: {
    type: String,
    required: [true, "percent upto required!"],
  },
});

const markDivisionModel = mongoose.model("markDivision", markDivisionSchema);

export default markDivisionModel;