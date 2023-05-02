import SendMailModel from "../../models/communicate/SendMail.js";

const createSendMail = async (req, res) => {
  try {
    const result = new SendMailModel({
      school: req.body.school,
      template: req.body.template,
      title: req.body.title,
      attachedFile: req.body.attachedFile,
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

const deleteSendMail = async (req, res) => {
  try {
    if (!(await SendMailModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SendMailModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSendMail = async (req, res) => {
  try {
    const visitorBook = await SendMailModel.findByIdAndUpdate(
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

const getAllSendMail = async (req, res) => {
  try {
    const SendMail = await SendMailModel.find();
    return res.send(SendMail);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createSendMail, deleteSendMail, UpdateSendMail, getAllSendMail };
