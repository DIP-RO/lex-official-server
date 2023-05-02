import DesignationModel from "../../models/humanResource/degignation.js";

const createDesignation = async (req, res) => {
  try {
    const result = new DesignationModel({
      school: req.body.school,
      name: req.body.name,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteDesignation = async (req, res) => {
  try {
    if (!(await DesignationModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await DesignationModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateDesignation = async (req, res) => {
  try {
    const visitorBook = await DesignationModel.findByIdAndUpdate(
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

const getAllDesignation = async (req, res) => {
  try {
    const Designation = await DesignationModel.find();
    return res.send(Designation);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createDesignation,
  deleteDesignation,
  UpdateDesignation,
  getAllDesignation,
};
