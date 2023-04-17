import ReferenceModel from "../../../models/frontOffice/SetupFrontOffice/Reference.js";

const createReference = async (req, res) => {
  try {
    const result = new ReferenceModel({
      school: req.body.school,
      reference: req.body.Reference,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteReference = async (req, res) => {
  try {
    if (!(await ReferenceModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ReferenceModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateReference = async (req, res) => {
  try {
    const visitorBook = await ReferenceModel.findByIdAndUpdate(
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

const getAllReference = async (req, res) => {
  try {
    const admissionEnquiries = await ReferenceModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createReference, deleteReference, UpdateReference, getAllReference };
