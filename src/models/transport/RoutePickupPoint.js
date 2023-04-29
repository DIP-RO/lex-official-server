import mongoose from "mongoose";

const PickupPointsSchema = new mongoose.Schema({
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
  pickupPoint: {
    type: String,
    required: [true, "pickup point required!"],
  },
  distance: {
    type: String,
    required: false,
  },
  pickupTime: {
    type: String,
    required: [true, "pickup time required!"],
  },
  monthlyFees: {
    type: Number,
    required: [true, "monthly fees required!"],
  },
  status: {
    type: Number,
    required: [true, "status required!"],
  },
});

const PickupPointsModel = mongoose.model("PickupPoints", PickupPointsSchema);

export default PickupPointsModel;
