import SubjectGroupModel from "../../models/academic/subjectGroup.js";



const createSubjectGroup = async (req, res) => {
  try {
    const result = new SubjectGroupModel({
      school: req.body.school,
      name: req.body.name,
      class: req.body.class,
      subject: req.body.subject,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSubjectGroup = async (req, res) => {
  try {
    if (!(await SubjectGroupModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SubjectGroupModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSubjectGroup = async (req, res) => {
  try {
    const visitorBook = await SubjectGroupModel.findByIdAndUpdate(
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

const getAllSubjectGroup = async (req, res) => {
  try {
    const SubjectGroup = await SubjectGroupModel.find();
    return res.send(SubjectGroup);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createSubjectGroup,
  deleteSubjectGroup,
  UpdateSubjectGroup,
  getAllSubjectGroup,
};
