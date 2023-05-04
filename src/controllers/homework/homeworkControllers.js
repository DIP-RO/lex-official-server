import HomeworkModel from "../../models/homework/Homework.js";

const createHomework = async (req, res) => {
  try {
    const result = new HomeworkModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      subjectGroup: req.body.subjectGroup,
      subject: req.body.subject,
      homeworkDate: req.body.homeworkDate,
      submitDate: req.body.submitDate,
      maxMark: req.body.maxMark,
      attachedFiles: req.body.attachedFiles,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteHomework = async (req, res) => {
  try {
    if (!(await HomeworkModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await HomeworkModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateHomework = async (req, res) => {
  try {
    const visitorBook = await HomeworkModel.findByIdAndUpdate(
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

const getAllHomework = async (req, res) => {
  try {
    const Homework = await HomeworkModel.find();
    return res.send(Homework);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createHomework, deleteHomework, UpdateHomework, getAllHomework };
