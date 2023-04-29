import mongoose from "mongoose";

const PickupPointSchema = new mongoose.Schema({
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
    required: [true, "pickup point name required!"],
  },
  latitude: {
    type: String,
    required: [true, "latitude required!"],
  },
  longitude: {
    type: String,
    required: [true, "longitude required!"],
  },
});

const PickupPointModel = mongoose.model("PickupPoint", PickupPointSchema);

export default PickupPointModel;
