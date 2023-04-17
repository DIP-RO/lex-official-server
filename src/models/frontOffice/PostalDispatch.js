import mongoose from "mongoose";

const PostalDispatchSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  toTitle: {
    type: String,
    required: [true, "toTitle required!"],
  },
  referenceNo: {
    type: String,
    required: [true, "referenceNo required!"],
  },
  address: {
    type: String,
    required: false,
  },
  Note: {
    type: String,
    required: false,
  },
  formTitle: {
    type: String,
    required: [true, "formTitle required!"],
  },
  date: {
    type: Date,
    required: true,
  },
  inTime: {
    type: Date,
    required: true,
  },
  outTime: {
    type: Date,
    required: false,
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

const PostalDispatchModel = mongoose.model(
  "PostalDispatch",
  PostalDispatchSchema
);

export default PostalDispatchModel;