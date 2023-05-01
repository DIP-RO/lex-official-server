import TopicModel from "../../models/lessonPlan/topic.js";

const createTopic = async (req, res) => {
  try {
    const result = new TopicModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      subjectGroup: req.body.subjectGroup,
      subject: req.body.subject,
      lesson: req.body.lesson,
      topic: req.body.topic,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteTopic = async (req, res) => {
  try {
    if (!(await TopicModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await TopicModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateTopic = async (req, res) => {
  try {
    const visitorBook = await TopicModel.findByIdAndUpdate(
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

const getAllTopic = async (req, res) => {
  try {
    const Topic = await TopicModel.find();
    return res.send(Topic);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createTopic, deleteTopic, UpdateTopic, getAllTopic };
