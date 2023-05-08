import PurposeModel from "../../../models/frontOffice/SetupFrontOffice/Purpose.js";

const createPurpose = async (req, res) => {
  try {
    const result = new PurposeModel({
      school: req.body.school,
      purpose: req.body.purpose,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePurpose = async (req, res) => {
  try {
    if (!(await PurposeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PurposeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePurpose = async (req, res) => {
  try {
    const visitorBook = await PurposeModel.findByIdAndUpdate(
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

const getAllPurpose = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PurposeModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PurposeModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PurposeModel.countDocuments(
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
export { createPurpose, deletePurpose, UpdatePurpose, getAllPurpose };
