import SubjectModel from "../../models/academic/subjects.js";



const createSubject = async (req, res) => {
  try {
    const result = new SubjectModel({
      school: req.body.school,
      subject: req.body.subject,
      subjectType: req.body.subjectType,
      subjectCode: req.body.subjectCode,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSubject = async (req, res) => {
  try {
    if (!(await SubjectModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SubjectModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSubject = async (req, res) => {
  try {
    const visitorBook = await SubjectModel.findByIdAndUpdate(
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

const getAllSubject = async (req, res) => {
  try {
    const Subject = await SubjectModel.find();
    return res.send(Subject);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createSubject,
  deleteSubject,
  UpdateSubject,
  getAllSubject,
};
