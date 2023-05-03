import MediaManagerModel from "../../models/frontCMS/MediaManager.js";

const createMediaManager = async (req, res) => {
  try {
    const result = new MediaManagerModel({
      school: req.body.school,
      file: req.body.file,
      youtube: req.body.youtube,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteMediaManager = async (req, res) => {
  try {
    if (!(await MediaManagerModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await MediaManagerModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateMediaManager = async (req, res) => {
  try {
    const visitorBook = await MediaManagerModel.findByIdAndUpdate(
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

const getAllMediaManager = async (req, res) => {
  try {
    const MediaManager = await MediaManagerModel.find();
    return res.send(MediaManager);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createMediaManager,
  deleteMediaManager,
  UpdateMediaManager,
  getAllMediaManager,
};
