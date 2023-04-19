import mongoose from "mongoose";

const ItemStoreSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  itemStoreName: {
    type: String,
    required: [true, "itemStoreName required!"],
  },
  itemStoreCode: {
    type: String,
    required: [true, "itemStoreCode required!"],
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

const ItemStoreModel = mongoose.model("ItemStore", ItemStoreSchema);

export default ItemStoreModel;
