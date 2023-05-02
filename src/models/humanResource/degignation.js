import mongoose from "mongoose";

const designationSchema = new mongoose.Schema({
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
    required: [true, "designation name required!"],
  },
});

const DesignationModel = mongoose.model("designation", designationSchema);

export default DesignationModel;
