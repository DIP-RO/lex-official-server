import mongoose from "mongoose";

const AddItemSchema = new mongoose.Schema({
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
  unit: {
    type: String,
    required: [true, "unit required!"],
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

const AddItemModel = mongoose.model("AddItem", AddItemSchema);

export default AddItemModel;
