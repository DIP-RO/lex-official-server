import FeesMasterModel from "../../models/transport/FeesMaster.js";

const createFeesMaster = async (req, res) => {
  try {
    const result = new FeesMasterModel({
      school: req.body.school,
      month: req.body.month,
      dueDate: req.body.dueDate,
      fineType: req.body.fineType,
      percentage: req.body.percentage,
      fixAmount: req.body.fixAmount,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteFeesMaster = async (req, res) => {
  try {
    if (!(await FeesMasterModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await FeesMasterModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateFeesMaster = async (req, res) => {
  try {
    const visitorBook = await FeesMasterModel.findByIdAndUpdate(
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

const getAllFeesMaster = async (req, res) => {
  try {
    const FeesMaster = await FeesMasterModel.find();
    return res.send(FeesMaster);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createFeesMaster,
  deleteFeesMaster,
  UpdateFeesMaster,
  getAllFeesMaster,
};
