import mongoose from "mongoose";

const IssueItemSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  userType: {
    type: String,
    required: [true, "userType required!"],
  },
  issueTo: {
    type: String,
    required: [true, "issueTo required!"],
  },
  issueBy: {
    type: String,
    required: [true, "issueBy required!"],
  },
  issueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  itemCategory: {
    type: String,
    required: [true, "Item Category required!"],
  },
  item: {
    type: String,
    required: [true, "Item required!"],
  },
  Quantity: {
    type: String,
    required: [true, "Quantity required!"],
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

const IssueItemModel = mongoose.model("IssueItem", IssueItemSchema);

export default IssueItemModel;
