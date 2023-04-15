import AdmissionEnquiryModel from "../../models/fontOffice/AdmissionEnquiry.js";

const createAdmissionEnquiry = async (req, res) => {
  try {
    const result = new AdmissionEnquiryModel({
      school: req.body.school,
      name: req.body.name,
      phone: req.body.phone,
      source: req.body.source,
      enquiryData: req.body.enquiryData,
      lastFollowUpData: req.body.lastFollowUpData,
      nextFollowUpData: req.body.nextFollowUpData,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAdmissionEnquiry = async (req, res) => {
  try {
    if (!(await AdmissionEnquiryModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AdmissionEnquiryModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAdmissionEnquiry = async (req, res) => {
  try {
    const admissionEnquiry = await AdmissionEnquiryModel.findById(
      req.params.id
    );
    if (!admissionEnquiry) {
      return res.status(404).send({ error: "Admission enquiry not found" });
    }
    admissionEnquiry.school = req.body.school;
    admissionEnquiry.name = req.body.name;
    admissionEnquiry.phone = req.body.phone;
    admissionEnquiry.source = req.body.source;
    admissionEnquiry.enquiryData = req.body.enquiryData;
    admissionEnquiry.lastFollowUpData = req.body.lastFollowUpData;
    admissionEnquiry.nextFollowUpData = req.body.nextFollowUpData;
    admissionEnquiry.status = req.body.status;
    await admissionEnquiry.validate();
    await admissionEnquiry.save();
    return res.send(admissionEnquiry);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllAdmissionEnquiries = async (req, res) => {
  try {
    const admissionEnquiries = await AdmissionEnquiryModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  UpdateAdmissionEnquiry,
  getAllAdmissionEnquiries,
};
