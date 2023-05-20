import mongoose from "mongoose";

const LiveMeetingSchema = new mongoose.Schema({
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
  meetingTitle: {
    type: String,
    required: [true, "meeting title required!"],
  },
  meetingDateTime: {
    type: Date,
    required: [true, "meeting date required!"],
  },
  meetingDuration: {
    type: Date,
    required: [true, "class duration required!"],
  },
  staffList: {
    type: String,
    required: [true, "staff List required!"],
  },
  url: {
    type: String,
    required: [true, "Google Meet link required!"],
  },
  description: {
    type: String,
    required: [true, "Google Meet description required!"],
  },
});

const LiveMeetingModel = mongoose.model("LiveMeeting", LiveMeetingSchema);

export default LiveMeetingModel;
