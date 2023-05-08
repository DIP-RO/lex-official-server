import IncomeHeadModel from "../../models/income/incomeHead.js";

const createIncomeHead = async (req, res) => {
  try {
    const result = new IncomeHeadModel({
      school: req.body.school,
      incomeHead: req.body.incomeHead,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIncomeHead = async (req, res) => {
  try {
    if (!(await IncomeHeadModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IncomeHeadModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateIncomeHead = async (req, res) => {
  try {
    const visitorBook = await IncomeHeadModel.findByIdAndUpdate(
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

const getAllIncomeHead = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await IncomeHeadModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await IncomeHeadModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await IncomeHeadModel.countDocuments(
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
  createIncomeHead,
  deleteIncomeHead,
  UpdateIncomeHead,
  getAllIncomeHead,
};
