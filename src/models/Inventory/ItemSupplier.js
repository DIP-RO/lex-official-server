import mongoose from "mongoose";

const ItemSupplierSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  name: {
    type: String,
    required: [true, "name required!"],
  },
  phone: {
    type: String,
    required: [true, "phone required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
  },
  email: {
    type: String,
    required: [true, "email required!"],
  },
  address: {
    type: String,
    required: [true, "address required!"],
  },
  contactPersonName: {
    type: String,
    required: [true, "Contact Person Name required!"],
  },
  contactPersonPhone: {
    type: String,
    required: [true, "Contact Person Phone required!"],
  },
  contactPersonEmail: {
    type: String,
    required: [true, "Contact Person Email required!"],
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

const ItemSupplierModel = mongoose.model("ItemSupplier", ItemSupplierSchema);

export default ItemSupplierModel;
