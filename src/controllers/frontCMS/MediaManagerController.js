import MediaManagerModel from "../../models/frontCMS/MediaManager.js";

const createMediaManager = async (req, res) => {
  try {
    const result = new MediaManagerModel({
      school: req.body.school,
      file: req.body.file,
      youtube: req.body.youtube,
      attachDocument: `http://localhost:5000/media-manager/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
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
    if (req.params.id) {
      const data = await MediaManagerModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await MediaManagerModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await MediaManagerModel.countDocuments(
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
  createMediaManager,
  deleteMediaManager,
  UpdateMediaManager,
  getAllMediaManager,
};
