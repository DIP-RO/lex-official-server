// imports
import mongoose from "mongoose";

const setupFrontOfficeSchema = new mongoose.Schema({
  purpose: { type: String, required: [true, "purpose required!"] },
  description: { type: String, required: [true, "description required!"] },
});

const setupFrontOfficeModel = mongoose.model(
  "setupFrontOffice",
  setupFrontOfficeSchema
);

export default setupFrontOfficeModel;
