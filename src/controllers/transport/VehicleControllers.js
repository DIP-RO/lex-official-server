import VehicleModel from "../../models/transport/Vehicle.js";

const createVehicle = async (req, res) => {
  try {
    const result = new VehicleModel({
      school: req.body.school,
      vehicleNumber: req.body.vehicleNumber,
      vehicleModel: req.body.vehicleModel,
      yearMade: req.body.yearMade,
      registerNumber: req.body.registerNumber,
      chasisNumber: req.body.chasisNumber,
      maxSeatingCapacity: req.body.maxSeatingCapacity,
      driverName: req.body.driverName,
      driverLicense: req.body.driverLicense,
      driverContact: req.body.driverContact,
      vehiclePhoto: req.body.vehiclePhoto,
      note: req.body.note,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteVehicle = async (req, res) => {
  try {
    if (!(await VehicleModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await VehicleModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateVehicle = async (req, res) => {
  try {
    const visitorBook = await VehicleModel.findByIdAndUpdate(
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

const getAllVehicle = async (req, res) => {
  try {
    const Vehicle = await VehicleModel.find();
    return res.send(Vehicle);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createVehicle, deleteVehicle, UpdateVehicle, getAllVehicle };
