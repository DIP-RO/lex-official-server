import EventModel from "../../models/frontCMS/Event.js";

const createEvent = async (req, res) => {
  try {
    const result = new EventModel({
      school: req.body.school,
      title: req.body.title,
      venue: req.body.venue,
      eventStart: req.body.eventStart,
      eventEnd: req.body.eventEnd,
      eventBanner: req.body.eventBanner,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    if (!(await EventModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await EventModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateEvent = async (req, res) => {
  try {
    const visitorBook = await EventModel.findByIdAndUpdate(
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

const getAllEvent = async (req, res) => {
  try {
    const Event = await EventModel.find();
    return res.send(Event);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createEvent, deleteEvent, UpdateEvent, getAllEvent };
