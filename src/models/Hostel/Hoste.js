import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  hostelName: {
    type: String,
    required: [true, "Hostel Name required!"],
  },
  type: {
    type: String,
    required: [true, "Type required!"],
  },
  address: {
    type: String,
    required: [true, "Address required!"],
  },
  intake: {
    type: String,
    required: [true, "Intake required!"],
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

const HostelModel = mongoose.model("Hostel", HostelSchema);

export default HostelModel;
