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
    if (req.params.id) {
      const data = await ItemSupplierModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await ItemSupplierModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await ItemSupplierModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createItemSupplier,
  deleteItemSupplier,
  UpdateItemSupplier,
  getAllItemSupplier,
};
