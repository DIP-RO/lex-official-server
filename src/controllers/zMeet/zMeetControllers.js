import ZMeetModel from "../../models/zMeet/zMeet.js";

const createZMeet = async (req, res) => {
  try {
    const result = new ZMeetModel({
      school: req.body.school,
      meetTitle: req.body.meetTitle,
      meetDate: req.body.meetDate,
      meetDuration: req.body.meetDuration,
      staff: req.body.staff,
      class: req.body.class,
      section: req.body.section,
      url: req.body.url,
      description: req.body.description,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteZMeet = async (req, res) => {
  try {
    if (!(await ZMeetModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ZMeetModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateZMeet = async (req, res) => {
  try {
    const visitorBook = await ZMeetModel.findByIdAndUpdate(
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

const getAllZMeet = async (req, res) => {
  try {
    const ZMeet = await ZMeetModel.find();
    return res.send(ZMeet);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createZMeet, deleteZMeet, UpdateZMeet, getAllZMeet };
