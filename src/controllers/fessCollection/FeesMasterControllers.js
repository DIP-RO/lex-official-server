import fessMasterModel from "../../models/fessCollection/feesMaster.js";

const createFeesMaster = async (req, res) => {
  try {
    const result = new fessMasterModel({
      school: req.body.school,
      feesGroup: req.body.feesGroup,
      dueDate: req.body.dueDate,
      amount: req.body.amount,
      feesType: req.body.feesType,
      fineAmount: req.body.fineAmount,
      fineType: req.body.fineType,
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
    if (!(await fessMasterModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await fessMasterModel.findByIdAndDelete(req.params.id);

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
    const visitorBook = await fessMasterModel.findByIdAndUpdate(
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
    const FeesMaster = await fessMasterModel.find();
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
