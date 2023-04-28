import ExamGroupModel from "../../models/examinations/examGroup.js";


const createExamGroup = async (req, res) => {
  try {
    const result = new ExamGroupModel({
      school: req.body.school,
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteExamGroup = async (req, res) => {
  try {
    if (!(await ExamGroupModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ExamGroupModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateExamGroup = async (req, res) => {
  try {
    const visitorBook = await ExamGroupModel.findByIdAndUpdate(
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

const getAllExamGroup = async (req, res) => {
  try {
    const ExamGroup = await ExamGroupModel.find();
    return res.send(ExamGroup);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createExamGroup,
  deleteExamGroup,
  UpdateExamGroup,
  getAllExamGroup,
};
