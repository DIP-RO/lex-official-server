import mongoose from "mongoose";

const AssignVehicleSchema = new mongoose.Schema({
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
  route: {
    type: String,
    required: [true, "route required!"],
  },
  vehicle: {
    type: String,
    required: [true, "route required!"],
  },
});

const AssignVehicleModel = mongoose.model("AssignVehicle", AssignVehicleSchema);

export default AssignVehicleModel;
