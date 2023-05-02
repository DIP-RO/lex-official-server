import SmsTemplateModel from "../../models/communicate/SmsTemplate.js";

const createSmsTemplate = async (req, res) => {
  try {
    const result = new SmsTemplateModel({
      school: req.body.school,
      title: req.body.title,
      message: req.body.message,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSmsTemplate = async (req, res) => {
  try {
    if (!(await SmsTemplateModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SmsTemplateModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSmsTemplate = async (req, res) => {
  try {
    const visitorBook = await SmsTemplateModel.findByIdAndUpdate(
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

const getAllSmsTemplate = async (req, res) => {
  try {
    const SmsTemplate = await SmsTemplateModel.find();
    return res.send(SmsTemplate);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createSmsTemplate,
  deleteSmsTemplate,
  UpdateSmsTemplate,
  getAllSmsTemplate,
};
