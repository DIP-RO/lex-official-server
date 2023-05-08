import StudentAttendanceModel from "../../models/attendance/studentAttendance.js";

const createStudentAttendance = async (req, res) => {
  try {
    const result = new StudentAttendanceModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      attendanceDate: req.body.attendanceDate,
      admissionNo: req.body.admissionNo,
      rollNumber: req.body.rollNumber,
      name: req.body.name,
      attendance: req.body.attendance,
      note: req.body.note,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllStudentAttendance = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await StudentAttendanceModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await StudentAttendanceModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await StudentAttendanceModel.countDocuments(
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

export { createStudentAttendance, getAllStudentAttendance };
