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
    if (req.params.id) {
      const data = await RoutePickupPointsModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await RoutePickupPointsModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await RoutePickupPointsModel.countDocuments(
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
  createRoutePickupPoints,
  deleteRoutePickupPoints,
  UpdateRoutePickupPoints,
  getAllRoutePickupPoints,
};
