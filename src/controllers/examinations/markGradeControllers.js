import MarkGradeModel from "../../models/examinations/markGrade.js";

const createMarkGrade = async (req, res) => {
  try {
    const result = new MarkGradeModel({
      school: req.body.school,
      name: req.body.name,
      examType: req.body.examType,
      upto: req.body.upto,
      from: req.body.from,
      gradePoint: req.body.gradePoint,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteMarkGrade = async (req, res) => {
  try {
    if (!(await MarkGradeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await MarkGradeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateMarkGrade = async (req, res) => {
  try {
    const visitorBook = await MarkGradeModel.findByIdAndUpdate(
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

const getAllMarkGrade = async (req, res) => {
  try {
    const MarkGrade = await MarkGradeModel.find();
    return res.send(MarkGrade);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createMarkGrade,
  deleteMarkGrade,
  UpdateMarkGrade,
  getAllMarkGrade,
};
