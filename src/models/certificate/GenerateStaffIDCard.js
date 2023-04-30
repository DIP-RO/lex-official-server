import mongoose from "mongoose";

const GenerateStaffIDCardSchema = new mongoose.Schema({
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
  staff: {
    type: String,
    required: [true, "staff required!"],
  },
  idCard: {
    type: String,
    required: [true, "id card template required!"],
  },
  expireDate: {
    type: Date,
    required: [true, "expire date required!"],
  },
});

const GenerateStaffIDCardModel = mongoose.model(
  "GenerateStaffIDCard",
  GenerateStaffIDCardSchema
);

export default GenerateStaffIDCardModel;
