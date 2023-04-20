import onlineCourseModel from "../../models/OnlineCourse/OnlineCourse.js";

const createOnlineCourse = async (req, res) => {
  try {
    const result = new onlineCourseModel({
      school: req.body.school,
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      outcomes: req.body.outcomes,
      class: req.body.class,
      description: req.body.description,
      assignTeacher: req.body.assignTeacher,
      previewUrl: req.body.previewUrl,
      price: req.body.price,
      discount: req.body.discount,
      is_free: req.body.is_free,
      category: req.body.category,
      frontSiteVisibility: req.body.frontSiteVisibility,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteOnlineCourse = async (req, res) => {
  try {
    if (!(await onlineCourseModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await onlineCourseModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateOnlineCourse = async (req, res) => {
  try {
    const visitorBook = await onlineCourseModel.findByIdAndUpdate(
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

const getAllOnlineCourse = async (req, res) => {
  try {
    const OnlineCourse = await onlineCourseModel.find();
    return res.send(OnlineCourse);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createOnlineCourse, deleteOnlineCourse, UpdateOnlineCourse, getAllOnlineCourse };
