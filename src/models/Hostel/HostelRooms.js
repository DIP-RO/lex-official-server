import mongoose from "mongoose";

const HostelRoomSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  hostelRoom: {
    type: String,
    required: [true, "hostelRoom required!"],
  },
  roomType: {
    type: String,
    required: [true, "Room Type required!"],
  },
  noOfBed: {
    type: String,
    required: [true, "No Of Bed required!"],
  },
  constPerBed: {
    type: String,
    required: [true, "Const Per Bed required!"],
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

const HostelRoomModel = mongoose.model("HostelRoom", HostelRoomSchema);

export default HostelRoomModel;
