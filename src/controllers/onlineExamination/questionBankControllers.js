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
    if (req.params.id) {
      const data = await QuestionBankModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await QuestionBankModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await QuestionBankModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createQuestionBank,
  deleteQuestionBank,
  UpdateQuestionBank,
  getAllQuestionBank,
};
