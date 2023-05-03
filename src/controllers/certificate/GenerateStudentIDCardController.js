import GenerateStudentIDCardModel from "../../models/certificate/GenerateStudentIDCard.js";

const createGenerateStudentIDCard = async (req, res) => {
  try {
    const result = new GenerateStudentIDCardModel({
      school: req.body.school,
      student: req.body.student,
      idCard: req.body.idCard,
      expireDate: req.body.expireDate,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteGenerateStudentIDCard = async (req, res) => {
  try {
    if (!(await GenerateStudentIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GenerateStudentIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGenerateStudentIDCard = async (req, res) => {
  try {
    const visitorBook = await GenerateStudentIDCardModel.findByIdAndUpdate(
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

const getAllGenerateStudentIDCard = async (req, res) => {
  try {
    const GenerateStudentIDCard = await GenerateStudentIDCardModel.find();
    return res.send(GenerateStudentIDCard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createGenerateStudentIDCard,
  deleteGenerateStudentIDCard,
  UpdateGenerateStudentIDCard,
  getAllGenerateStudentIDCard,
};
