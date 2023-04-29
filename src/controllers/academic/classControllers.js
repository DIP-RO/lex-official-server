import ClassModel from "../../models/academic/class.js";


const createClass = async (req, res) => {
  try {
    const result = new ClassModel({
      school: req.body.school,
      name: req.body.name,
      section: req.body.section,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteClass = async (req, res) => {
  try {
    if (!(await ClassModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await ClassModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateClass = async (req, res) => {
  try {
    const visitorBook = await ClassModel.findByIdAndUpdate(
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

const getAllClass = async (req, res) => {
  try {
    const Class = await ClassModel.find();
    return res.send(Class);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createClass,
  deleteClass,
  UpdateClass,
  getAllClass,
};
