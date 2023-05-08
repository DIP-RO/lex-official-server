import courseSettingModel from "../../models/onlineCourse/setting.js";

const createSetting = async (req, res) => {
  try {
    const result = new courseSettingModel({
      school: req.body.school,
      awsAccessKey: req.body.awsAccessKey,
      awsSecretKey: req.body.awsSecretKey,
      bucketName: req.body.bucketName,
      region: req.body.region,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSetting = async (req, res) => {
  try {
    if (!(await courseSettingModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await courseSettingModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSetting = async (req, res) => {
  try {
    const visitorBook = await courseSettingModel.findByIdAndUpdate(
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

const getAllSetting = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await courseSettingModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await courseSettingModel
      .find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await courseSettingModel.countDocuments(
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

export { createSetting, deleteSetting, UpdateSetting, getAllSetting };
