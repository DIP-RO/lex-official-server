import PhoneCallLogModel from "../../models/fontOffice/PhoneCallLog.js";

const createPhoneCallLog = async (req, res) => {
  try {
    const result = new PhoneCallLogModel({
      school: req.body.school,
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      callTypes: req.body.callTypes,
      nextFollowUpData: req.body.nextFollowUpData,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePhoneCallLog = async (req, res) => {
  try {
    if (!(await PhoneCallLogModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PhoneCallLogModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePhoneCallLog = async (req, res) => {
  try {
    const visitorBook = await PhoneCallLogModel.findByIdAndUpdate(
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

const getAllPhoneCallLogs = async (req, res) => {
  try {
    const admissionEnquiries = await PhoneCallLogModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getPhoneCallLog = async (req, res) => {
  try {
    const phoneCallLog = await PhoneCallLogModel.findById(req.params.id);
    if (!phoneCallLog) {
      return res.status(404).send({ error: "Invalid Phone Call Log" });
    }
    return res.send(phoneCallLog);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createPhoneCallLog,
  deletePhoneCallLog,
  UpdatePhoneCallLog,
  getAllPhoneCallLogs,
  getPhoneCallLog,
};
