import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
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
    required: [true, "department name required!"],
  },
});

const DepartmentModel = mongoose.model("department", departmentSchema);

export default DepartmentModel;
