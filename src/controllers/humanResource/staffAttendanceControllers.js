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
    if (req.params.id) {
      const data = await StaffAttendanceModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await StaffAttendanceModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await StaffAttendanceModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createStaffAttendance,
  deleteStaffAttendance,
  UpdateStaffAttendance,
  getAllStaffAttendance,
};
