import mongoose from "mongoose";

const GenerateStudentIDCardSchema = new mongoose.Schema({
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
  student: {
    type: String,
    required: [true, "student required!"],
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

const GenerateStudentIDCardModel = mongoose.model(
  "GenerateStudentIDCard",
  GenerateStudentIDCardSchema
);

export default GenerateStudentIDCardModel;
