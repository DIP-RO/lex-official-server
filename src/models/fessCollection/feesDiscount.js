import mongoose from "mongoose";

const feesDiscountSchema = new mongoose.Schema({
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
    required: [true, "discount name required!"],
  },
  discountCode: {
    type: String,
    required: [true, "discount code required!"],
  },
  discountType: {
    type: String,
    required: [true, "discount type required!"],
  },
  discount: {
    type: String,
    required: [true, "discount amount or percentage required!"],
  },
  description: {
    type: String,
    required: [true, "discount description required!"],
  },
});

const feesDiscountModel = mongoose.model("feesDiscount", feesDiscountSchema);
export default feesDiscountModel;