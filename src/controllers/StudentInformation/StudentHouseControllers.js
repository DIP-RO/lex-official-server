import StudentHouseModel from "../../models/StudentInformation/StudentHouse.js";

const createStudentHouse = async (req, res) => {
  try {
    const result = new StudentHouseModel({
      school: req.body.school,
      name: req.body.name,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStudentHouse = async (req, res) => {
  try {
    if (!(await StudentHouseModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StudentHouseModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStudentHouse = async (req, res) => {
  try {
    const visitorBook = await StudentHouseModel.findByIdAndUpdate(
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

const getAllStudentHouse = async (req, res) => {
  try {
    const admissionEnquiries = await StudentHouseModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStudentHouse,
  deleteStudentHouse,
  UpdateStudentHouse,
  getAllStudentHouse,
};
