import SmsModel from "../../models/communicate/SendSms.js";

const createSms = async (req, res) => {
  try {
    const result = new SmsModel({
      school: req.body.school,
      template: req.body.template,
      title: req.body.title,
      sendThrough: req.body.sendThrough,
      templateID: req.body.templateID,
      message: req.body.message,
      messageTo: req.body.messageTo,
      sendNow: req.body.sendNow,
      scheduleDate: req.body.scheduleDate,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSms = async (req, res) => {
  try {
    if (!(await SmsModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SmsModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSms = async (req, res) => {
  try {
    const visitorBook = await SmsModel.findByIdAndUpdate(
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

const getAllSms = async (req, res) => {
  try {
    const Sms = await SmsModel.find();
    return res.send(Sms);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createSms, deleteSms, UpdateSms, getAllSms };
