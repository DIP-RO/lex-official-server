import fessTypeModel from "../../models/fessCollection/fessType.js";

const createFeesType = async (req, res) => {
  try {
    const result = new fessTypeModel({
      school: req.body.school,
      name: req.body.name,
      feesCode: req.body.feesCode,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteFeesType = async (req, res) => {
  try {
    if (!(await fessTypeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await fessTypeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateFeesType = async (req, res) => {
  try {
    const visitorBook = await fessTypeModel.findByIdAndUpdate(
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

const getAllFeesType = async (req, res) => {
  try {
    const FeesType = await fessTypeModel.find();
    return res.send(FeesType);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createFeesType,
  deleteFeesType,
  UpdateFeesType,
  getAllFeesType,
};
