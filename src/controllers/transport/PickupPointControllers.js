import PickupPointModel from "../../models/transport/PickupPoint.js";

const createPickupPoint = async (req, res) => {
  try {
    const result = new PickupPointModel({
      school: req.body.school,
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePickupPoint = async (req, res) => {
  try {
    if (!(await PickupPointModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PickupPointModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePickupPoint = async (req, res) => {
  try {
    const visitorBook = await PickupPointModel.findByIdAndUpdate(
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

const getAllPickupPoint = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PickupPointModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PickupPointModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PickupPointModel.countDocuments(
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
  createPickupPoint,
  deletePickupPoint,
  UpdatePickupPoint,
  getAllPickupPoint,
};
