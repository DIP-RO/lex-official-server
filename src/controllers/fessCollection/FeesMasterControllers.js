import fessMasterModel from "../../models/fessCollection/feesMaster.js";

const createFeesMaster = async (req, res) => {
  try {
    const result = new fessMasterModel({
      school: req.body.school,
      feesGroup: req.body.feesGroup,
      dueDate: req.body.dueDate,
      amount: req.body.amount,
      feesType: req.body.feesType,
      fineAmount: req.body.fineAmount,
      fineType: req.body.fineType,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteFeesMaster = async (req, res) => {
  try {
    if (!(await fessMasterModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await fessMasterModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateFeesMaster = async (req, res) => {
  try {
    const visitorBook = await fessMasterModel.findByIdAndUpdate(
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

const getAllFeesMaster = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await fessMasterModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await fessMasterModel
      .find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await fessMasterModel.countDocuments(
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
  createFeesMaster,
  deleteFeesMaster,
  UpdateFeesMaster,
  getAllFeesMaster,
};
