import AddItemModel from "../../models/Inventory/AddItem.js";

const createAddItem = async (req, res) => {
  try {
    const result = new AddItemModel({
      school: req.body.school,
      item: req.body.item,
      itemCategory: req.body.itemCategory,
      unit: req.body.unit,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAddItem = async (req, res) => {
  try {
    if (!(await AddItemModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AddItemModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAddItem = async (req, res) => {
  try {
    const visitorBook = await AddItemModel.findByIdAndUpdate(
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

const getAllAddItem = async (req, res) => {
  try {
    const AddItem = await AddItemModel.find();
    return res.send(AddItem);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createAddItem, deleteAddItem, UpdateAddItem, getAllAddItem };
