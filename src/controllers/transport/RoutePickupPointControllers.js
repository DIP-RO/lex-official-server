import RoutePickupPointsModel from "../../models/transport/RoutePickupPoint.js";

const createRoutePickupPoints = async (req, res) => {
  try {
    const result = new RoutePickupPointsModel({
      school: req.body.school,
      route: req.body.route,
      pickupPoint: req.body.pickupPoint,
      distance: req.body.distance,
      pickupTime: req.body.pickupTime,
      monthlyFees: req.body.monthlyFees,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteRoutePickupPoints = async (req, res) => {
  try {
    if (!(await RoutePickupPointsModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await RoutePickupPointsModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateRoutePickupPoints = async (req, res) => {
  try {
    const visitorBook = await RoutePickupPointsModel.findByIdAndUpdate(
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

const getAllRoutePickupPoints = async (req, res) => {
  try {
    const PickupPoints = await RoutePickupPointsModel.find();
    return res.send(PickupPoints);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createRoutePickupPoints,
  deleteRoutePickupPoints,
  UpdateRoutePickupPoints,
  getAllRoutePickupPoints,
};
