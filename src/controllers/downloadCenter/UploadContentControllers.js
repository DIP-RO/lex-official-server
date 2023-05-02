import UploadContentModel from "../../models/downloadCenter/UploadContent.js";

const createUploadContent = async (req, res) => {
  try {
    const result = new UploadContentModel({
      school: req.body.school,
      contentType: req.body.contentType,
      uploadedFile: req.body.uploadedFile,
      uploadedVideoLink: req.body.uploadedVideoLink,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteUploadContent = async (req, res) => {
  try {
    if (!(await UploadContentModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await UploadContentModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateUploadContent = async (req, res) => {
  try {
    const visitorBook = await UploadContentModel.findByIdAndUpdate(
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

const getAllUploadContent = async (req, res) => {
  try {
    const UploadContent = await UploadContentModel.find();
    return res.send(UploadContent);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createUploadContent,
  deleteUploadContent,
  UpdateUploadContent,
  getAllUploadContent,
};
