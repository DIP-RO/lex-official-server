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
    const StudentAttendance = await StudentAttendanceModel.find();
    return res.send(StudentAttendance);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStudentAttendance,
  getAllStudentAttendance,
};
