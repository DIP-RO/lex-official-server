import SectionModel from "../../models/academic/sections.js";


const createSection = async (req, res) => {
  try {
    const result = new SectionModel({
      school: req.body.school,
      name: req.body.name,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSection = async (req, res) => {
  try {
    if (!(await SectionModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SectionModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSection = async (req, res) => {
  try {
    const visitorBook = await SectionModel.findByIdAndUpdate(
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

const getAllSection = async (req, res) => {
  try {
    const Section = await SectionModel.find();
    return res.send(Section);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createSection,
  deleteSection,
  UpdateSection,
  getAllSection,
};
