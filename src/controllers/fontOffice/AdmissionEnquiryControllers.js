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

const deleAdmissionEnquiry = async (req, res) => {
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

export { createAdmissionEnquiry, deleAdmissionEnquiry };
