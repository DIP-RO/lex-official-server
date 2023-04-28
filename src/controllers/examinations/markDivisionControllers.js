import MarkDivisionModel from "../../models/examinations/markDivision.js";

const createMarkDivision = async (req, res) => {
  try {
    const result = new MarkDivisionModel({
      school: req.body.school,
      name: req.body.name,
      percentFrom: req.body.percentFrom,
      percentUpto: req.body.percentUpto,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteMarkDivision = async (req, res) => {
  try {
    if (!(await MarkDivisionModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await MarkDivisionModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateMarkDivision = async (req, res) => {
  try {
    const visitorBook = await MarkDivisionModel.findByIdAndUpdate(
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

const getAllMarkDivision = async (req, res) => {
  try {
    const MarkDivision = await MarkDivisionModel.find();
    return res.send(MarkDivision);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createMarkDivision,
  deleteMarkDivision,
  UpdateMarkDivision,
  getAllMarkDivision,
};
