import LeaveTypeModel from "../../models/humanResource/leaveType.js";

const createLeaveType = async (req, res) => {
  try {
    const result = new LeaveTypeModel({
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

const deleteLeaveType = async (req, res) => {
  try {
    if (!(await LeaveTypeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LeaveTypeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateLeaveType = async (req, res) => {
  try {
    const visitorBook = await LeaveTypeModel.findByIdAndUpdate(
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

const getAllLeaveType = async (req, res) => {
  try {
    const LeaveType = await LeaveTypeModel.find();
    return res.send(LeaveType);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createLeaveType, deleteLeaveType, UpdateLeaveType, getAllLeaveType };
