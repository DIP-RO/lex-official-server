import ItemSupplierModel from "../../models/Inventory/ItemSupplier.js";

const createItemSupplier = async (req, res) => {
  try {
    const result = new ItemSupplierModel({
      school: req.body.school,
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      email: req.body.email,
      address: req.body.address,
      contactPersonName: req.body.contactPersonName,
      contactPersonPhone: req.body.contactPersonPhone,
      contactPersonEmail: req.body.contactPersonEmail,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteItemSupplier = async (req, res) => {
  try {
    if (!(await ItemSupplierModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ItemSupplierModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateItemSupplier = async (req, res) => {
  try {
    const visitorBook = await ItemSupplierModel.findByIdAndUpdate(
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

const getAllItemSupplier = async (req, res) => {
  try {
    const ItemSupplier = await ItemSupplierModel.find();
    return res.send(ItemSupplier);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createItemSupplier,
  deleteItemSupplier,
  UpdateItemSupplier,
  getAllItemSupplier,
};
