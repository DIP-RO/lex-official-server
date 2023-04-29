import mongoose from "mongoose";

const IssueReturnSchema = new mongoose.Schema({
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
  book: {
    type: String,
    required: [true, "book required!"],
  },
  issueTo: {
    type: String,
    required: [true, "library card no required!"],
  },
  returnDate: {
    type: Date,
    required: [true, "return date required!"],
  },
  isReturn: {
    type: Boolean,
    required: false,
  },
});

const IssueReturnModel = mongoose.model("IssueReturn", IssueReturnSchema);

export default IssueReturnModel;
