import RoomTypeModel from "../../models/Hostel/RoomType.js";

const createRoomType = async (req, res) => {
  try {
    const result = new RoomTypeModel({
      school: req.body.school,
      roomType: req.body.roomType,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteRoomType = async (req, res) => {
  try {
    if (!(await RoomTypeModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await RoomTypeModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateRoomType = async (req, res) => {
  try {
    const visitorBook = await RoomTypeModel.findByIdAndUpdate(
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

const getAllRoomType = async (req, res) => {
  try {
    const RoomType = await RoomTypeModel.find();
    return res.send(RoomType);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createRoomType, deleteRoomType, UpdateRoomType, getAllRoomType };
