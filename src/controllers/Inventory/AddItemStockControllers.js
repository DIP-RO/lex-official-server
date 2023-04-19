import AddItemStockModel from "../../models/Inventory/AddItemStock.js";

const createAdmissionEnquiry = async (req, res) => {
  try {
    const result = new AddItemStockModel({
      school: req.body.school,
      item: req.body.item,
      itemCategory: req.body.itemCategory,
      supplier: req.body.supplier,
      store: req.body.store,
      purchasePrice: req.body.purchasePrice,
      date: req.body.date,
      attachDocument: req.body.attachDocument,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAdmissionEnquiry = async (req, res) => {
  try {
    if (!(await AddItemStockModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AddItemStockModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAdmissionEnquiry = async (req, res) => {
  try {
    const visitorBook = await AddItemStockModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!visitorBook) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(visitorBook);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllAddItemStock = async (req, res) => {
  try {
    const AddItemStock = await AddItemStockModel.find();
    return res.send(AddItemStock);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  UpdateAdmissionEnquiry,
  getAllAddItemStock,
};
