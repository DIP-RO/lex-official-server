import LeaveModel from "../../models/attendance/leave.js";

const createLeave = async (req, res) => {
  try {
    const result = new LeaveModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      student: req.body.student,
      applyDate: req.body.applyDate,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      reason: req.body.reason,
      leaveStatus: req.body.leaveStatus,
      attachDocument: req.body.attachDocument,
      studentName: req.body.studentName,
      approveBy: req.body.approveBy,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteLeave = async (req, res) => {
  try {
    if (!(await LeaveModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LeaveModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateLeave = async (req, res) => {
  try {
    const visitorBook = await LeaveModel.findByIdAndUpdate(
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

const getAllLeave = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await LeaveModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await LeaveModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await LeaveModel.countDocuments(
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

export { createLeave, deleteLeave, UpdateLeave, getAllLeave };
