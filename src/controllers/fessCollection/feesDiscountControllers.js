import fessDiscountModel from "../../models/fessCollection/feesDiscount.js";

const createFeesDiscount = async (req, res) => {
  try {
    const result = new fessDiscountModel({
      school: req.body.school,
      name: req.body.name,
      discountCode: req.body.discountCode,
      discountType: req.body.discountType,
      discount: req.body.discount,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteFeesDiscount = async (req, res) => {
  try {
    if (!(await fessDiscountModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await fessDiscountModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateFeesDiscount = async (req, res) => {
  try {
    const visitorBook = await fessDiscountModel.findByIdAndUpdate(
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

const getAllFeesDiscount = async (req, res) => {
  try {
    const FeesDiscount = await fessDiscountModel.find();
    return res.send(FeesDiscount);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createFeesDiscount,
  deleteFeesDiscount,
  UpdateFeesDiscount,
  getAllFeesDiscount,
};
