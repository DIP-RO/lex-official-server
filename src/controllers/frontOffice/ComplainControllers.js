import complainModel from "../../models/frontOffice/Complain.js";

const createComplain = async (req, res) => {
  try {
    const result = new complainModel({
      school: req.body.school,
      complainType: req.body.complainType,
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      complainBy: req.body.complainBy,
      source: req.body.source,
      actionTaken: req.body.actionTaken,
      assigned: req.body.assigned,
      note: req.body.note,
      attachDocument: `http://localhost:5000/complain/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
      date: req.body.date,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteComplain = async (req, res) => {
  try {
    if (!(await complainModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await complainModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateComplain = async (req, res) => {
  try {
    const complain = await complainModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!complain) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(complain);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getComplain = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await complainModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await complainModel
      .find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await complainModel.countDocuments(
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
export { createComplain, deleteComplain, UpdateComplain, getComplain };
