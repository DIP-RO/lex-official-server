import mongoose from "mongoose";

const RoomTypeSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  roomType: {
    type: String,
    required: [true, "Room Type required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
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

const RoomTypeModel = mongoose.model("RoomType", RoomTypeSchema);

export default RoomTypeModel;
