import mongoose from "mongoose";

const VideoTutorialSchema = new mongoose.Schema({
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
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  title: {
    type: String,
    required: [true, "title required!"],
  },
  videoLink: {
    type: String,
    required: [true, "video link required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const VideoTutorialModel = mongoose.model("VideoTutorial", VideoTutorialSchema);

export default VideoTutorialModel;
