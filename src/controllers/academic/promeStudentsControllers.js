import PromoteStudentModel from "../../models/academic/promeStudents.js";



const createPromoteStudent = async (req, res) => {
  try {
    const result = new PromoteStudentModel({
      school: req.body.school,
      student: req.body.student,
      class: req.body.class,
      sections: req.body.sections,
      promoteInSession: req.body.promoteInSession,
      newClass: req.body.newClass,
      newSection: req.body.newSection,
      currentResult: req.body.currentResult,
      nextSessionStatus: req.body.nextSessionStatus,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePromoteStudent = async (req, res) => {
  try {
    if (!(await PromoteStudentModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PromoteStudentModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePromoteStudent = async (req, res) => {
  try {
    const visitorBook = await PromoteStudentModel.findByIdAndUpdate(
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

const getAllPromoteStudent = async (req, res) => {
  try {
    const PromoteStudent = await PromoteStudentModel.find();
    return res.send(PromoteStudent);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createPromoteStudent,
  deletePromoteStudent,
  UpdatePromoteStudent,
  getAllPromoteStudent,
};
