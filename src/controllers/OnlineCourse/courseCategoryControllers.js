import courseCategoryModel from "../../models/onlineCourse/courseCategory.js";

const createCourseCategory = async (req, res) => {
  try {
    const result = new courseCategoryModel({
      school: req.body.school,
      categoryName: req.body.categoryName,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteCourseCategory = async (req, res) => {
  try {
    if (!(await courseCategoryModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await courseCategoryModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateCourseCategory = async (req, res) => {
  try {
    const visitorBook = await courseCategoryModel.findByIdAndUpdate(
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

const getAllCourseCategory = async (req, res) => {
  try {
    const CourseCategory = await courseCategoryModel.find();
    return res.send(CourseCategory);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createCourseCategory, deleteCourseCategory, UpdateCourseCategory, getAllCourseCategory };
