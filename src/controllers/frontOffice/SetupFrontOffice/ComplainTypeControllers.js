import ComplaintTypeModel from "../../../models/frontOffice/SetupFrontOffice/ComplaintType.js";

const createComplainType = async (req, res) => {
  try {
    const result = new ComplaintTypeModel({
      school: req.body.school,
      complainType: req.body.ComplainType,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteComplainType = async (req, res) => {
  try {
    if (!(await ComplaintTypeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ComplaintTypeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateComplainType = async (req, res) => {
  try {
    const visitorBook = await ComplaintTypeModel.findByIdAndUpdate(
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

const getAllComplainType = async (req, res) => {
  try {
    const admissionEnquiries = await ComplaintTypeModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createComplainType,
  deleteComplainType,
  UpdateComplainType,
  getAllComplainType,
};
