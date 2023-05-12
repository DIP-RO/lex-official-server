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
      attachDocument: `http://localhost:5000/student-certificates/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
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
    if (req.params.id) {
      const data = await StudentCertificatesModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await StudentCertificatesModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await StudentCertificatesModel.countDocuments(
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
  createStudentCertificates,
  deleteStudentCertificates,
  UpdateStudentCertificates,
  getAllStudentCertificates,
};
