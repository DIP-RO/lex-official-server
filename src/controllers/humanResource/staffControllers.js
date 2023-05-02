import StaffModel from "../../models/humanResource/staff.js";

const createStaff = async (req, res) => {
  try {
    const result = new StaffModel({
      school: req.body.school,
      role: req.body.role,
      designation: req.body.designation,
      department: req.body.department,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      email: req.body.email,
      gender: req.body.gender,
      dob: req.body.dob,
      doj: req.body.doj,
      phone: req.body.phone,
      emergencyContactNumber: req.body.emergencyContactNumber,
      maritalStatus: req.body.maritalStatus,
      photo: req.body.photo,
      address: req.body.address,
      permanentAddress: req.body.permanentAddress,
      qualification: req.body.qualification,
      workExperience: req.body.workExperience,
      note: req.body.note,
      panNumber: req.body.panNumber,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStaff = async (req, res) => {
  try {
    if (!(await StaffModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StaffModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStaff = async (req, res) => {
  try {
    const visitorBook = await StaffModel.findByIdAndUpdate(
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

const getAllStaff = async (req, res) => {
  try {
    const Staff = await StaffModel.find();
    return res.send(Staff);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createStaff, deleteStaff, UpdateStaff, getAllStaff };
