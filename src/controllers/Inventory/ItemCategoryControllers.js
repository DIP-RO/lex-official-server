import ItemCategoryModel from "../../models/Inventory/ItemCategory.js";

const createItemCategory = async (req, res) => {
  try {
    const result = new ItemCategoryModel({
      school: req.body.school,
      itemCategory: req.body.itemCategory,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteItemCategory = async (req, res) => {
  try {
    if (!(await ItemCategoryModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ItemCategoryModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateItemCategory = async (req, res) => {
  try {
    const visitorBook = await ItemCategoryModel.findByIdAndUpdate(
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

const getAllItemCategory = async (req, res) => {
  try {
    const ItemCategory = await ItemCategoryModel.find();
    return res.send(ItemCategory);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createItemCategory,
  deleteItemCategory,
  UpdateItemCategory,
  getAllItemCategory,
};
