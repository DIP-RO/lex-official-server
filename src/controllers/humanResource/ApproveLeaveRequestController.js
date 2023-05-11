import ApproveLeaveRequestModel from "../../models/humanResource/ApproveLeaveRequest.js";

const createApproveLeaveRequest = async (req, res) => {
  try {
    const result = new ApproveLeaveRequestModel({
      school: req.body.school,
      role: req.body.role,
      name: req.body.name,
      applyDate: req.body.applyDate,
      leaveType: req.body.leaveType,
      leaveFromDate: req.body.leaveFromDate,
      leaveFromDate: req.body.leaveFromDate,
      reason: req.body.reason,
      note: req.body.note,
      attachDocument: `http://localhost:5000/approve-leave-request/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteApproveLeaveRequest = async (req, res) => {
  try {
    if (!(await ApproveLeaveRequestModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ApproveLeaveRequestModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateApproveLeaveRequest = async (req, res) => {
  try {
    const visitorBook = await ApproveLeaveRequestModel.findByIdAndUpdate(
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

const getAllApproveLeaveRequest = async (req, res) => {
  try {
    const ApproveLeaveRequest = await ApproveLeaveRequestModel.find();
    return res.send(ApproveLeaveRequest);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createApproveLeaveRequest,
  deleteApproveLeaveRequest,
  UpdateApproveLeaveRequest,
  getAllApproveLeaveRequest,
};
