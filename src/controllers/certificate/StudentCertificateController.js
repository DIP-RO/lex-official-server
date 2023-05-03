import StudentCertificatesModel from "../../models/certificate/StudentCertificate.js";

const createStudentCertificates = async (req, res) => {
  try {
    const result = new StudentCertificatesModel({
      school: req.body.school,
      name: req.body.name,
      headerLeftText: req.body.headerLeftText,
      headerCenterText: req.body.headerCenterText,
      headerRightText: req.body.headerRightText,
      bodyText: req.body.bodyText,
      footerLeftText: req.body.footerLeftText,
      footerCenterText: req.body.footerCenterText,
      footerRightText: req.body.footerRightText,
      headerHeight: req.body.headerHeight,
      footerHeight: req.body.footerHeight,
      bodyHeight: req.body.bodyHeight,
      bodyWidth: req.body.bodyWidth,
      bgImage: req.body.bgImage,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStudentCertificates = async (req, res) => {
  try {
    if (!(await StudentCertificatesModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StudentCertificatesModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStudentCertificates = async (req, res) => {
  try {
    const visitorBook = await StudentCertificatesModel.findByIdAndUpdate(
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

const getAllStudentCertificates = async (req, res) => {
  try {
    const StudentCertificates = await StudentCertificatesModel.find();
    return res.send(StudentCertificates);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStudentCertificates,
  deleteStudentCertificates,
  UpdateStudentCertificates,
  getAllStudentCertificates,
};
