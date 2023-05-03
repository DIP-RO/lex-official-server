import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: [true, "title required!"],
  },
  date: {
    type: Date,
    required: [true, "date required!"],
  },
  description: {
    type: String,
    required: [true, "description required!"],
  },
  images: {
    type: String,
    required: [true, "description required!"],
  },
});

const NewsModel = mongoose.model("News", NewsSchema);

export default NewsModel;
