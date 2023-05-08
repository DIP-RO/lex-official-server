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
    if (req.params.id) {
      const data = await VideoTutorialModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await VideoTutorialModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await VideoTutorialModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createVideoTutorial,
  deleteVideoTutorial,
  UpdateVideoTutorial,
  getAllVideoTutorial,
};
