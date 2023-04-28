import QuestionBankModel from "../../models/onlineExamination/questionBank.js";


const createQuestionBank = async (req, res) => {
  try {
    const result = new QuestionBankModel({
      school: req.body.school,
      subject: req.body.subject,
      type: req.body.type,
      level: req.body.level,
      class: req.body.class,
      section: req.body.section,
      question: req.body.question,
      
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteQuestionBank = async (req, res) => {
  try {
    if (!(await QuestionBankModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await QuestionBankModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateQuestionBank = async (req, res) => {
  try {
    const visitorBook = await QuestionBankModel.findByIdAndUpdate(
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

const getAllQuestionBank = async (req, res) => {
  try {
    const QuestionBank = await QuestionBankModel.find();
    return res.send(QuestionBank);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createQuestionBank,
  deleteQuestionBank,
  UpdateQuestionBank,
  getAllQuestionBank,
};
