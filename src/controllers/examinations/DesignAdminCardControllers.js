import admitCardDesignModel from "../../models/examinations/DesignAdminCard.js";


const createAdmitCardDesign = async (req, res) => {
  try {
    const result = new admitCardDesignModel({
      school: req.body.school,
      template: req.body.template,
      heading: req.body.heading,
      title: req.body.title,
      examName: req.body.examName,
      schoolName: req.body.schoolName,
      examCenterName: req.body.examCenterName,
      leftSideLogo: req.body.leftSideLogo,
      rightSideLogo: req.body.rightSideLogo,
      sign: req.body.sign,
      bgImage: req.body.bgImage,
      name: req.body.name,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      dob: req.body.dob,
      admissionNo: req.body.admissionNo,
      roll: req.body.roll,
      address: req.body.address,
      gender: req.body.gender,
      photo: req.body.photo,
      class: req.body.class,
      section: req.body.section,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAdmitCardDesign = async (req, res) => {
  try {
    if (!(await admitCardDesignModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await admitCardDesignModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAdmitCardDesign = async (req, res) => {
  try {
    const visitorBook = await admitCardDesignModel.findByIdAndUpdate(
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

const getAllAdmitCardDesign = async (req, res) => {
  try {
    const AdmitCardDesign = await admitCardDesignModel.find();
    return res.send(AdmitCardDesign);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createAdmitCardDesign,
  deleteAdmitCardDesign,
  UpdateAdmitCardDesign,
  getAllAdmitCardDesign,
};
