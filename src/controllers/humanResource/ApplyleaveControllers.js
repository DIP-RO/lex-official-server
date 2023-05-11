import ApplyLeaveModel from "../../models/humanResource/Applyleave.js";

const createApplyLeaveModel = async (req, res) => {
  try {
    const result = new ApplyLeaveModel({
      school: req.body.school,
      applyDate: req.body.applyDate,
      availableLeave: req.body.availableLeave,
      leaveFromDate: req.body.leaveFromDate,
      leaveToDate: req.body.leaveToDate,
      reason: req.body.reason,
      attachDocument: `http://localhost:5000/apply-leave/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteApplyLeaveModel = async (req, res) => {
  try {
    if (!(await ApplyLeaveModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ApplyLeaveModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateApplyLeaveModel = async (req, res) => {
  try {
    const visitorBook = await ApplyLeaveModel.findByIdAndUpdate(
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

const getAllApplyLeaveModel = async (req, res) => {
  try {
    const ApplyLeaveModel = await ApplyLeaveModel.find();
    return res.send(ApplyLeaveModel);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createApplyLeaveModel,
  deleteApplyLeaveModel,
  UpdateApplyLeaveModel,
  getAllApplyLeaveModel,
};
