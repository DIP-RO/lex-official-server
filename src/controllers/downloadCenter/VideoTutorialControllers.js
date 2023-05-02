import VideoTutorialModel from "../../models/downloadCenter/VideoTutorial.js";

const createVideoTutorial = async (req, res) => {
  try {
    const result = new VideoTutorialModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      title: req.body.title,
      videoLink: req.body.videoLink,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteVideoTutorial = async (req, res) => {
  try {
    if (!(await VideoTutorialModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await VideoTutorialModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateVideoTutorial = async (req, res) => {
  try {
    const visitorBook = await VideoTutorialModel.findByIdAndUpdate(
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

const getAllVideoTutorial = async (req, res) => {
  try {
    const VideoTutorial = await VideoTutorialModel.find();
    return res.send(VideoTutorial);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createVideoTutorial,
  deleteVideoTutorial,
  UpdateVideoTutorial,
  getAllVideoTutorial,
};
