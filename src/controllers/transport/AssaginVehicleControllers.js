import AssignVehicleModel from "../../models/transport/AssaginVehicle.js";

const createAssignVehicle = async (req, res) => {
  try {
    const result = new AssignVehicleModel({
      school: req.body.school,
      route: req.body.route,
      vehicle: req.body.vehicle,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAssignVehicle = async (req, res) => {
  try {
    if (!(await AssignVehicleModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AssignVehicleModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAssignVehicle = async (req, res) => {
  try {
    const visitorBook = await AssignVehicleModel.findByIdAndUpdate(
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

const getAllAssignVehicle = async (req, res) => {
  try {
    const AssignVehicle = await AssignVehicleModel.find();
    return res.send(AssignVehicle);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createAssignVehicle,
  deleteAssignVehicle,
  UpdateAssignVehicle,
  getAllAssignVehicle,
};
