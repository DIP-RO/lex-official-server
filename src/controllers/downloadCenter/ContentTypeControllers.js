import ContentTypeModel from "../../models/downloadCenter/ContentType.js";

const createContentType = async (req, res) => {
  try {
    const result = new ContentTypeModel({
      school: req.body.school,
      name: req.body.name,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteContentType = async (req, res) => {
  try {
    if (!(await ContentTypeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ContentTypeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateContentType = async (req, res) => {
  try {
    const visitorBook = await ContentTypeModel.findByIdAndUpdate(
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

const getAllContentType = async (req, res) => {
  try {
    const ContentType = await ContentTypeModel.find();
    return res.send(ContentType);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createContentType,
  deleteContentType,
  UpdateContentType,
  getAllContentType,
};
