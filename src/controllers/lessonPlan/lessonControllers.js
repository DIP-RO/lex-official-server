import LessonModel from "../../models/lessonPlan/lesson.js";

const createLesson = async (req, res) => {
  try {
    const result = new LessonModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      subjectGroup: req.body.subjectGroup,
      subject: req.body.subject,
      lessonName: req.body.lessonName,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteLesson = async (req, res) => {
  try {
    if (!(await LessonModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LessonModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateLesson = async (req, res) => {
  try {
    const visitorBook = await LessonModel.findByIdAndUpdate(
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

const getAllLesson = async (req, res) => {
  try {
    const Lesson = await LessonModel.find();
    return res.send(Lesson);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createLesson, deleteLesson, UpdateLesson, getAllLesson };
