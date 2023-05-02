import ExpenseHeadModel from "../../models/expenses/expenseHead.js";

const createExpenseHead = async (req, res) => {
  try {
    const result = new ExpenseHeadModel({
      school: req.body.school,
      expenseHead: req.body.expenseHead,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteExpenseHead = async (req, res) => {
  try {
    if (!(await ExpenseHeadModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ExpenseHeadModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateExpenseHead = async (req, res) => {
  try {
    const visitorBook = await ExpenseHeadModel.findByIdAndUpdate(
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

const getAllExpenseHead = async (req, res) => {
  try {
    const ExpenseHead = await ExpenseHeadModel.find();
    return res.send(ExpenseHead);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createExpenseHead,
  deleteExpenseHead,
  UpdateExpenseHead,
  getAllExpenseHead,
};
