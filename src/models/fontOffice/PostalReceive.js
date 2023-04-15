import mongoose from "mongoose";

const PostalReceiveSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  formTitle: {
    type: String,
    required: [true, "formTitle required!"],
  },
  referenceNo: {
    type: String,
    required: [true, "referenceNo required!"],
  },
  address: {
    type: String,
    required: [true, "address required!"],
  },
  note: {
    type: String,
    required: [true, "note required!"],
  },
  toTitle: {
    type: String,
    required: [true, "toTitle required!"],
  },

  date: {
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

const PostalReceiveModel = mongoose.model("PostalReceive", PostalReceiveSchema);

export default PostalReceiveModel;
