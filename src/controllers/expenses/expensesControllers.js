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
    if (req.params.id) {
      const data = await ExpenseModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await ExpenseModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await ExpenseModel.countDocuments(
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

export { createExpense, deleteExpense, UpdateExpense, getAllExpense };
