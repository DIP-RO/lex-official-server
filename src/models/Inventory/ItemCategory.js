import mongoose from "mongoose";

const ItemCategorySchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  itemCategory: {
    type: String,
    required: [true, "itemCategory required!"],
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

const ItemCategoryModel = mongoose.model("ItemCategory", ItemCategorySchema);

export default ItemCategoryModel;
