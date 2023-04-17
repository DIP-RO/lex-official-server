import SourceModel from "../../../models/frontOffice/SetupFrontOffice/Source.js";

const createSource = async (req, res) => {
  try {
    const result = new SourceModel({
      school: req.body.school,
      source: req.body.Source,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSource = async (req, res) => {
  try {
    if (!(await SourceModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SourceModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSource = async (req, res) => {
  try {
    const visitorBook = await SourceModel.findByIdAndUpdate(
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

const getAllSource = async (req, res) => {
  try {
    const admissionEnquiries = await SourceModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createSource, deleteSource, UpdateSource, getAllSource };
