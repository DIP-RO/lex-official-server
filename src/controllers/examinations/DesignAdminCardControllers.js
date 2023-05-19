import admitCardDesignModel from "../../models/examinations/DesignAdminCard.js";

const createAdmitCardDesign = async (req, res) => {
  try {
    const attachDocuments = [];

    if (req.files) {
      for (const fieldName in req.files) {
        const files = req.files[fieldName];
        files.forEach((file) => {
          const originalName = file.originalname;
          const fileName = originalName.substring(
            0,
            originalName.lastIndexOf(".")
          );
          const fileUrl = `http://localhost:5000/admit-card-design/files/${file.filename}`;
          const document = {
            [fieldName]: fileUrl,
          };
          attachDocuments.push(document);
        });
      }
    }
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
      attachDocument: attachDocuments,
    });
    console.log("files name", req.files);
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
    if (req.params.id) {
      const data = await admitCardDesignModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await admitCardDesignModel
      .find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await admitCardDesignModel.countDocuments(
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
  createAdmitCardDesign,
  deleteAdmitCardDesign,
  UpdateAdmitCardDesign,
  getAllAdmitCardDesign,
};
