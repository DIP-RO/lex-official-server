import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
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
  vehicleNumber: {
    type: String,
    required: [true, "vehicle number required!"],
  },
  vehicleModel: {
    type: String,
    required: false,
  },
  yearMade: {
    type: String,
    required: false,
  },
  registerNumber: {
    type: String,
    required: false,
  },
  chasisNumber: {
    type: String,
    required: false,
  },
  maxSeatingCapacity: {
    type: String,
    required: false,
  },
  driverName: {
    type: String,
    required: false,
  },
  driverLicense: {
    type: String,
    required: false,
  },
  driverContact: {
    type: String,
    required: false,
  },
  vehiclePhoto: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
});

const VehicleModel = mongoose.model("Vehicle", VehicleSchema);

export default VehicleModel;
