import StaffAttendanceModel from "../../models/humanResource/staffAttendance.js";

const createStaffAttendance = async (req, res) => {
  try {
    const result = new StaffAttendanceModel({
      school: req.body.school,
      staff: req.body.staff,
      attendance: req.body.attendance,
      note: req.body.note,
      leaveRequest: req.body.leaveRequest,
      approvedLeave: req.body.approvedLeave,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStaffAttendance = async (req, res) => {
  try {
    if (!(await StaffAttendanceModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StaffAttendanceModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStaffAttendance = async (req, res) => {
  try {
    const visitorBook = await StaffAttendanceModel.findByIdAndUpdate(
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

const getAllStaffAttendance = async (req, res) => {
  try {
    const Staff = await StaffAttendanceModel.find();
    return res.send(Staff);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStaffAttendance,
  deleteStaffAttendance,
  UpdateStaffAttendance,
  getAllStaffAttendance,
};
