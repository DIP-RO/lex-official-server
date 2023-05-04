import IncomeModel from "../../models/income/income.js";

const createIncome = async (req, res) => {
  try {
    const result = new IncomeModel({
      school: req.body.school,
      incomeHead: req.body.incomeHead,
      name: req.body.name,
      invoiceNumber: req.body.invoiceNumber,
      date: req.body.date,
      amount: req.body.amount,
      document: req.body.document,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIncome = async (req, res) => {
  try {
    if (!(await IncomeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IncomeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateIncome = async (req, res) => {
  try {
    const visitorBook = await IncomeModel.findByIdAndUpdate(
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

const getAllIncome = async (req, res) => {
  try {
    const Income = await IncomeModel.find();
    return res.send(Income);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createIncome, deleteIncome, UpdateIncome, getAllIncome };
