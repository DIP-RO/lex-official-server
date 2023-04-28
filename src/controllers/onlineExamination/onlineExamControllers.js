import OnlineExamModel from "../../models/onlineExamination/onlineExam.js";


const createOnlineExam = async (req, res) => {
  try {
    const result = new OnlineExamModel({
      school: req.body.school,
      quiz: req.body.quiz,
      examTitle: req.body.examTitle,
      examFrom: req.body.examFrom,
      examTo: req.body.examTo,
      autoResultPublishDate: req.body.autoResultPublishDate,
      timeDuration: req.body.timeDuration,
      attempt: req.body.attempt,
      passingPercentage: req.body.passingPercentage,
      answerWordLimit: req.body.answerWordLimit,
      publishExam: req.body.publishExam,
      publishResult: req.body.publishResult,
      negativeMarking: req.body.negativeMarking,
      displayMarkInExam: req.body.displayMarkInExam,
      randomQuestionOrder: req.body.randomQuestionOrder,
      description: req.body.description,
      
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteOnlineExam = async (req, res) => {
  try {
    if (!(await OnlineExamModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await OnlineExamModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateOnlineExam = async (req, res) => {
  try {
    const visitorBook = await OnlineExamModel.findByIdAndUpdate(
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

const getAllOnlineExam = async (req, res) => {
  try {
    const OnlineExam = await OnlineExamModel.find();
    return res.send(OnlineExam);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createOnlineExam,
  deleteOnlineExam,
  UpdateOnlineExam,
  getAllOnlineExam,
};
