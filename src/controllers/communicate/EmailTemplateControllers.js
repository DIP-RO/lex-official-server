import EmailTemplateModel from "../../models/communicate/EmailTemplate.js";

const createEmailTemplate = async (req, res) => {
  try {
    const result = new EmailTemplateModel({
      school: req.body.school,
      title: req.body.title,
      attachedFile: req.body.attachedFile,
      message: req.body.message,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteEmailTemplate = async (req, res) => {
  try {
    if (!(await EmailTemplateModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await EmailTemplateModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateEmailTemplate = async (req, res) => {
  try {
    const visitorBook = await EmailTemplateModel.findByIdAndUpdate(
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

const getAllEmailTemplate = async (req, res) => {
  try {
    const EmailTemplate = await EmailTemplateModel.find();
    return res.send(EmailTemplate);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createEmailTemplate,
  deleteEmailTemplate,
  UpdateEmailTemplate,
  getAllEmailTemplate,
};
