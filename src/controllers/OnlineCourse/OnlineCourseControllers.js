import onlineCourseModel from "../../models/onlineCourse/OnlineCourse.js";

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
    if (req.params.id) {
      const data = await onlineCourseModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await onlineCourseModel
      .find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await onlineCourseModel.countDocuments(
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
  createOnlineCourse,
  deleteOnlineCourse,
  UpdateOnlineCourse,
  getAllOnlineCourse,
};
