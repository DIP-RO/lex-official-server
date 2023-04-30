import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
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
    required: [true, "event title required!"],
  },
  venue: {
    type: String,
    required: [true, "event venue required!"],
  },
  eventStart: {
    type: Date,
    required: [true, "event start required!"],
  },
  eventEnd: {
    type: Date,
    required: [true, "event end required!"],
  },
  eventBanner: {
    type: String,
    required: [true, "event banner required!"],
  },
});

const EventModel = mongoose.model("Event", EventSchema);

export default EventModel;
