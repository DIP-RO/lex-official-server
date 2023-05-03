import GenerateStaffIDCardModel from "../../models/certificate/GenerateStaffIDCard.js";

const createGenerateStaffIDCard = async (req, res) => {
  try {
    const result = new GenerateStaffIDCardModel({
      school: req.body.school,
      staff: req.body.staff,
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

const deleteGenerateStaffIDCard = async (req, res) => {
  try {
    if (!(await GenerateStaffIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GenerateStaffIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGenerateStaffIDCard = async (req, res) => {
  try {
    const visitorBook = await GenerateStaffIDCardModel.findByIdAndUpdate(
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

const getAllGenerateStaffIDCard = async (req, res) => {
  try {
    const GenerateStaffIDCard = await GenerateStaffIDCardModel.find();
    return res.send(GenerateStaffIDCard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createGenerateStaffIDCard,
  deleteGenerateStaffIDCard,
  UpdateGenerateStaffIDCard,
  getAllGenerateStaffIDCard,
};
