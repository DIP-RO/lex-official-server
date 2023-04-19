import ItemStoreModel from "../../models/Inventory/ItemStore.js";

const createItemStore = async (req, res) => {
  try {
    const result = new ItemStoreModel({
      school: req.body.school,
      itemStoreName: req.body.itemStoreName,
      itemStoreCode: req.body.itemStoreCode,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteItemStore = async (req, res) => {
  try {
    if (!(await ItemStoreModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ItemStoreModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateItemStore = async (req, res) => {
  try {
    const visitorBook = await ItemStoreModel.findByIdAndUpdate(
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

const getAllItemStore = async (req, res) => {
  try {
    const ItemStore = await ItemStoreModel.find();
    return res.send(ItemStore);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createItemStore, deleteItemStore, UpdateItemStore, getAllItemStore };
