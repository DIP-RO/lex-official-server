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
    if (req.params.id) {
      const data = await UploadContentModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await UploadContentModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await UploadContentModel.countDocuments(
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
  createUploadContent,
  deleteUploadContent,
  UpdateUploadContent,
  getAllUploadContent,
};
