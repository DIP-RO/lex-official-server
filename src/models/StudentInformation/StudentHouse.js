import mongoose from "mongoose";

const StudentHouseSchema = new mongoose.Schema({
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
    required: [true, "name required!"],
  },
  description: {
    type: String,
    required: false,
  },
});

const StudentHouseModel = mongoose.model("StudentHouse", StudentHouseSchema);

export default StudentHouseModel;
