import fessGroupModel from "../../models/fessCollection/feesGroup.js";

const createFeesGroup = async (req, res) => {
  try {
    const result = new fessGroupModel({
      school: req.body.school,
      name: req.body.name,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteFeesGroup = async (req, res) => {
  try {
    if (!(await fessGroupModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await fessGroupModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateFeesGroup = async (req, res) => {
  try {
    const visitorBook = await fessGroupModel.findByIdAndUpdate(
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

const getAllFeesGroup = async (req, res) => {
  try {
    const FeesGroup = await fessGroupModel.find();
    return res.send(FeesGroup);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createFeesGroup,
  deleteFeesGroup,
  UpdateFeesGroup,
  getAllFeesGroup,
};
