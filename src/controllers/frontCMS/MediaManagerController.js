import HostelModel from "../../models/Hostel/Hoste.js";

const createHostel = async (req, res) => {
  try {
    const result = new HostelModel({
      school: req.body.school,
      hostelName: req.body.hostelName,
      type: req.body.type,
      address: req.body.address,
      intake: req.body.intake,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteHostel = async (req, res) => {
  try {
    if (!(await HostelModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await HostelModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateHostel = async (req, res) => {
  try {
    const visitorBook = await HostelModel.findByIdAndUpdate(
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

const getAllHostel = async (req, res) => {
  try {
    const Hostel = await HostelModel.find();
    return res.send(Hostel);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createHostel, deleteHostel, UpdateHostel, getAllHostel };
