import ClassTeacherModel from "../../models/academic/classTeacher.js";


const createClassTeacher = async (req, res) => {
  try {
    const result = new ClassTeacherModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      classTeacher: req.body.classTeacher,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteClassTeacher = async (req, res) => {
  try {
    if (!(await ClassTeacherModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ClassTeacherModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateClassTeacher = async (req, res) => {
  try {
    const visitorBook = await ClassTeacherModel.findByIdAndUpdate(
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

const getAllClassTeacher = async (req, res) => {
  try {
    const ClassTeacher = await ClassTeacherModel.find();
    return res.send(ClassTeacher);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createClassTeacher,
  deleteClassTeacher,
  UpdateClassTeacher,
  getAllClassTeacher,
};
