import DisableReasonModel from "../../models/StudentInformation/DisableReason.js";

const createDisableReason = async (req, res) => {
  try {
    const result = new DisableReasonModel({
      school: req.body.school,
      DisableReason: req.body.DisableReason,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteDisableReason = async (req, res) => {
  try {
    if (!(await DisableReasonModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await DisableReasonModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateDisableReason = async (req, res) => {
  try {
    const visitorBook = await DisableReasonModel.findByIdAndUpdate(
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

const getAllDisableReasons = async (req, res) => {
  try {
    const admissionEnquiries = await DisableReasonModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createDisableReason,
  deleteDisableReason,
  UpdateDisableReason,
  getAllDisableReasons,
};
