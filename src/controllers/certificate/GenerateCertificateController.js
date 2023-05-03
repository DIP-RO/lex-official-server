import GenerateCertificatesModel from "../../models/certificate/GenerateCertificate.js";

const createGenerateCertificates = async (req, res) => {
  try {
    const result = new GenerateCertificatesModel({
      school: req.body.school,
      certificate: req.body.certificate,
      student: req.body.student,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteGenerateCertificates = async (req, res) => {
  try {
    if (!(await GenerateCertificatesModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GenerateCertificatesModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGenerateCertificates = async (req, res) => {
  try {
    const visitorBook = await GenerateCertificatesModel.findByIdAndUpdate(
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

const getAllGenerateCertificates = async (req, res) => {
  try {
    const GenerateCertificates = await GenerateCertificatesModel.find();
    return res.send(GenerateCertificates);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createGenerateCertificates,
  deleteGenerateCertificates,
  UpdateGenerateCertificates,
  getAllGenerateCertificates,
};
