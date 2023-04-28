import PrintAdmitCardModel from "../../models/examinations/printAdmitCard.js";

const createPrintAdmitCard = async (req, res) => {
  try {
    const result = new PrintAdmitCardModel({
      school: req.body.school,
      name: req.body.name,
      feesCode: req.body.feesCode,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePrintAdmitCard = async (req, res) => {
  try {
    if (!(await PrintAdmitCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PrintAdmitCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePrintAdmitCard = async (req, res) => {
  try {
    const visitorBook = await PrintAdmitCardModel.findByIdAndUpdate(
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

const getAllPrintAdmitCard = async (req, res) => {
  try {
    const PrintAdmitCard = await PrintAdmitCardModel.find();
    return res.send(PrintAdmitCard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createPrintAdmitCard,
  deletePrintAdmitCard,
  UpdatePrintAdmitCard,
  getAllPrintAdmitCard,
};
