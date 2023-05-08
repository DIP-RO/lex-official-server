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
      attachDocument: `http://localhost:5000/income/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
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
    if (req.params.id) {
      const data = await IncomeModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await IncomeModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await IncomeModel.countDocuments(
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

export { createIncome, deleteIncome, UpdateIncome, getAllIncome };
