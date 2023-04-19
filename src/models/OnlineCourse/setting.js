import mongoose from "mongoose";

const courseSettingSchema = new mongoose.Schema({
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
  awsAccessKey: {
    type: String,
    required: [true, "Aws Access Key required!"],
  },
  awsSecretKey: {
    type: String,
    required: [true, "Aws Secret Key required!"],
  },
  bucketName: {
    type: String,
    required: [true, "Aws Secret Key required!"],
  },
  region: {
    type: String,
    required: [true, "region required!"],
  },
});

const courseSettingModel = mongoose.model(
  "Courses-Category",
  courseSettingSchema
);

export default courseSettingModel;
