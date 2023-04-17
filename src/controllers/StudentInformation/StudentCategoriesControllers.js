import StudentCategoriesModel from "../../models/StudentInformation/StudentCategories.js";

const createStudentCategories = async (req, res) => {
  try {
    const result = new StudentCategoriesModel({
      school: req.body.school,
      category: req.body.category,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStudentCategories = async (req, res) => {
  try {
    if (!(await StudentCategoriesModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StudentCategoriesModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStudentCategories = async (req, res) => {
  try {
    const visitorBook = await StudentCategoriesModel.findByIdAndUpdate(
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

const getAllStudentCategories = async (req, res) => {
  try {
    const admissionEnquiries = await StudentCategoriesModel.find();
    return res.send(admissionEnquiries);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStudentCategories,
  deleteStudentCategories,
  UpdateStudentCategories,
  getAllStudentCategories,
};
