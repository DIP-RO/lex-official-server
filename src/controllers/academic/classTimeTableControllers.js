import ClassTimeTableModel from "../../models/academic/classTimeTable.js";


const createClassTimeTable = async (req, res) => {
  try {
    const result = new ClassTimeTableModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      subjectGroup: req.body.subjectGroup,
      subject: req.body.subject,
      teacher: req.body.teacher,
      timeFrom: req.body.timeFrom,
      timeTo: req.body.timeTo,
      roomNo: req.body.roomNo,
      day: req.body.day,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteClassTimeTable = async (req, res) => {
  try {
    if (!(await ClassTimeTableModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ClassTimeTableModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateClassTimeTable = async (req, res) => {
  try {
    const visitorBook = await ClassTimeTableModel.findByIdAndUpdate(
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

const getAllClassTimeTable = async (req, res) => {
  try {
    const ClassTimeTable = await ClassTimeTableModel.find();
    return res.send(ClassTimeTable);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createClassTimeTable,
  deleteClassTimeTable,
  UpdateClassTimeTable,
  getAllClassTimeTable,
};
