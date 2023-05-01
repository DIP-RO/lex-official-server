import IncomeHeadModel from "../../models/income/incomeHead.js";

const createIncomeHead = async (req, res) => {
  try {
    const result = new IncomeHeadModel({
      school: req.body.school,
      incomeHead: req.body.incomeHead,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIncomeHead = async (req, res) => {
  try {
    if (!(await IncomeHeadModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IncomeHeadModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateIncomeHead = async (req, res) => {
  try {
    const visitorBook = await IncomeHeadModel.findByIdAndUpdate(
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

const getAllIncomeHead = async (req, res) => {
  try {
    const IncomeHead = await IncomeHeadModel.find();
    return res.send(IncomeHead);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createIncomeHead,
  deleteIncomeHead,
  UpdateIncomeHead,
  getAllIncomeHead,
};
