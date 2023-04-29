import mongoose from "mongoose";

const BookListSchema = new mongoose.Schema({
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
    required: [true, "book title required!"],
  },
  bookNumber: {
    type: String,
    required: false,
  },
  isbnNumber: {
    type: String,
    required: false,
  },
  publisher: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  rackNumber: {
    type: String,
    required: false,
  },
  qty: {
    type: String,
    required: false,
  },
  bookPrice: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
});

const BookListModel = mongoose.model("BookList", BookListSchema);

export default BookListModel;
