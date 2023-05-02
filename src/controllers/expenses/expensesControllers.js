import ExpenseModel from "../../models/expenses/expenses.js";

const createExpense = async (req, res) => {
  try {
    const result = new ExpenseModel({
      school: req.body.school,
      expenseHead: req.body.expenseHead,
      name: req.body.name,
      invoiceNumber: req.body.invoiceNumber,
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

const deleteExpense = async (req, res) => {
  try {
    if (!(await ExpenseModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ExpenseModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateExpense = async (req, res) => {
  try {
    const visitorBook = await ExpenseModel.findByIdAndUpdate(
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

const getAllExpense = async (req, res) => {
  try {
    const Expense = await ExpenseModel.find();
    return res.send(Expense);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createExpense, deleteExpense, UpdateExpense, getAllExpense };
