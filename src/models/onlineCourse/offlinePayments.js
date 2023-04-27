import mongoose from "mongoose";

const offlinePaymentSchema = new mongoose.Schema({
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
  course: {
    type: String,
    required: [true, "course required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  lesson: {
    type: String,
    required: [true, "lesson required!"],
  },
  quiz: {
    type: String,
    required: [true, "quiz required!"],
  },
  courseProvider: {
    type: String,
    required: [true, "course provider required!"],
  },
  price: {
    type: Number,
    required: [true, "price required!"],
  },
  currentPrice: {
    type: Number,
    required: [true, "current price required!"],
  },
});

const offlinePaymentModel = mongoose.model(
  "offline-payment",
  offlinePaymentSchema
);

export default offlinePaymentModel;
