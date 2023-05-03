import StudentIDCardModel from "../../models/certificate/StudentIDCard.js";

const createStudentIDCard = async (req, res) => {
  try {
    const result = new StudentIDCardModel({
      school: req.body.school,
      bgImage: req.body.bgImage,
      logo: req.body.logo,
      schoolName: req.body.schoolName,
      addressEmailPhone: req.body.addressEmailPhone,
      title: req.body.title,
      headerColor: req.body.headerColor,
      admissionNo: req.body.admissionNo,
      StudentName: req.body.StudentName,
      class: req.body.class,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      studentAddress: req.body.studentAddress,
      phone: req.body.phone,
      dob: req.body.dob,
      bloodGroup: req.body.bloodGroup,
      designType: req.body.designType,
      barCode: req.body.barCode,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStudentIDCard = async (req, res) => {
  try {
    if (!(await StudentIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StudentIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStudentIDCard = async (req, res) => {
  try {
    const visitorBook = await StudentIDCardModel.findByIdAndUpdate(
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

const getAllStudentIDCard = async (req, res) => {
  try {
    const StudentIDCard = await StudentIDCardModel.find();
    return res.send(StudentIDCard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStudentIDCard,
  deleteStudentIDCard,
  UpdateStudentIDCard,
  getAllStudentIDCard,
};
