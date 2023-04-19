import mongoose from "mongoose";

const AddItemStockSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  itemCategory: {
    type: String,
    required: [true, "itemCategory required!"],
  },
  item: {
    type: String,
    required: [true, "item required!"],
  },
  supplier: {
    type: String,
    required: [true, "supplier required!"],
  },
  store: {
    type: String,
    required: [true, "supplier required!"],
  },
  purchasePrice: {
    type: String,
    required: [true, "Purchase Price required!"],
  },
  date: {
    type: Date,
    required: true,
  },
  attachDocument: {
    type: String,
    required: [true, "attachDocument required!"],
  },
  quantity: {
    type: String,
    required: [true, "Quantity required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
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
});

const AddItemStockModel = mongoose.model("AddItemStock", AddItemStockSchema);

export default AddItemStockModel;
