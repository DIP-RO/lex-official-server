import IncidentsModel from "../../models/behaviourRecord/incidents.js";

const createIncidents = async (req, res) => {
  try {
    const result = new IncidentsModel({
      school: req.body.school,
      title: req.body.title,
      points: req.body.points,
      isNegative: req.body.isNegative,
      description: req.body.description,
      studentID: req.body.studentID,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteIncidents = async (req, res) => {
  try {
    if (!(await IncidentsModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await IncidentsModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateIncidents = async (req, res) => {
  try {
    const visitorBook = await IncidentsModel.findByIdAndUpdate(
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

const getAllIncidents = async (req, res) => {
  try {
    const Incidents = await IncidentsModel.find();
    return res.send(Incidents);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createIncidents, deleteIncidents, UpdateIncidents, getAllIncidents };
