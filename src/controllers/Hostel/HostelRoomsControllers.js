import HostelRoomModel from "../../models/Hostel/HostelRooms.js";

const createHostelRoom = async (req, res) => {
  try {
    const result = new HostelRoomModel({
      school: req.body.school,
      item: req.body.item,
      itemCategory: req.body.itemCategory,
      unit: req.body.unit,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteHostelRoom = async (req, res) => {
  try {
    if (!(await HostelRoomModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await HostelRoomModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateHostelRoom = async (req, res) => {
  try {
    const visitorBook = await HostelRoomModel.findByIdAndUpdate(
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

const getAllHostelRoom = async (req, res) => {
  try {
    const HostelRoom = await HostelRoomModel.find();
    return res.send(HostelRoom);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createHostelRoom,
  deleteHostelRoom,
  UpdateHostelRoom,
  getAllHostelRoom,
};
