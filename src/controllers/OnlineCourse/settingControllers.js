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
    const Setting = await courseSettingModel.find();
    return res.send(Setting);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createSetting, deleteSetting, UpdateSetting, getAllSetting };
