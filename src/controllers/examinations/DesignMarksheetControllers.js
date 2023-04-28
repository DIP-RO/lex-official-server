import DesignMarksheetModel from "../../models/examinations/DesignMarksheet.js";

const createDesignMarksheet = async (req, res) => {
  try {
    const result = new DesignMarksheetModel({
      school: req.body.school,
      template: req.body.template,
      examName: req.body.examName,
      schoolName: req.body.schoolName,
      examCenterName: req.body.examCenterName,
      bodyText: req.body.bodyText,
      printDate: req.body.printDate,
      headerImage: req.body.headerImage,
      bgImage: req.body.bgImage,
      leftSideLogo: req.body.leftSideLogo,
      rightSideLogo: req.body.rightSideLogo,
      leftSign: req.body.leftSign,
      middleSign: req.body.middleSign,
      rightSign: req.body.rightSign,
      bgImage: req.body.bgImage,
      name: req.body.name,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      examSession: req.body.examSession,
      admissionNo: req.body.admissionNo,
      division: req.body.division,
      rank: req.body.rank,
      roll: req.body.roll,
      photo: req.body.photo,
      class: req.body.class,
      section: req.body.section,
      dob: req.body.dob,
      remark: req.body.remark,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteDesignMarksheet = async (req, res) => {
  try {
    if (!(await DesignMarksheetModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await DesignMarksheetModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateDesignMarksheet = async (req, res) => {
  try {
    const visitorBook = await DesignMarksheetModel.findByIdAndUpdate(
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

const getAllDesignMarksheet = async (req, res) => {
  try {
    const DesignMarksheet = await DesignMarksheetModel.find();
    return res.send(DesignMarksheet);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createDesignMarksheet,
  deleteDesignMarksheet,
  UpdateDesignMarksheet,
  getAllDesignMarksheet,
};
