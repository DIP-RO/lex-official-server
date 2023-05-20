import GMeetSettingModel from "../../models/gMeet/gMeetSeeting.js";
import LiveClassModel from "../../models/gMeet/liveClass.js";

const liveClassReport = async (req, res) => {
  try {
    const { class: className, section } = req.query;

    const filters = {};

    if (className) {
      filters.class = { $regex: className, $options: "i" };
    }
    if (section) {
      filters.section = { $regex: section, $options: "i" };
    }
    const result = await LiveClassModel.find(filters);
    res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const gMeetSetting = async (req, res) => {
  try {
    const result = new GMeetSettingModel({
      school: req.body.school,
      apiKey: req.body.apiKey,
      apiSecret: req.body.apiSecret,
      useGoogleCalendarApi: req.body.useGoogleCalendarApi,
      version: req.body.version,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const UpdateGMeetSetting = async (req, res) => {
  try {
    const meet = await GMeetSettingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!meet) {
      return res.status(404).send({
        error: "meet not found",
      });
    }

    meet.version = meet.version ? meet.version + 1 : 1;
    await meet.save();

    return res.send(meet);
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getGMeetSetting = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await LiveClassModel.findById(req.params.id);
      return res.status(200).send(data);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export { liveClassReport, gMeetSetting, UpdateGMeetSetting, getGMeetSetting };
