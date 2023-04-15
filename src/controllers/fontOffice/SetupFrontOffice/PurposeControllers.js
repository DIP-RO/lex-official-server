import PurposeModel from "../../../models/fontOffice/SetupFrontOffice/Purpose.js";

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
    const admissionEnquiries = await PurposeModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createPurpose, deletePurpose, UpdatePurpose, getAllPurpose };
