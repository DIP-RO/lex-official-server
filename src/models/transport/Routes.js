import mongoose from "mongoose";

const RoutesSchema = new mongoose.Schema({
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
    required: [true, "route name required!"],
  },
});

const RoutesModel = mongoose.model("Routes", RoutesSchema);

export default RoutesModel;
