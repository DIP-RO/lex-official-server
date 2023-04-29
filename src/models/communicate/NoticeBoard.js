import mongoose from "mongoose";

const NoticeBoardSchema = new mongoose.Schema({
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
    required: [true, "notice title required!"],
  },
  noticeDate: {
    type: Date,
    required: [true, "notice date required!"],
  },
  publishOn: {
    type: Date,
    required: [true, "publish date required!"],
  },
  attachedFile: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: [true, "notice message required!"],
  },
  messageTo: {
    type: String,
    required: false,
  },
});

const NoticeBoardModel = mongoose.model("NoticeBoard", NoticeBoardSchema);

export default NoticeBoardModel;
