import HomeworkModel from "../../models/homework/Homework.js";

const createHomework = async (req, res) => {
  try {
    const result = new HomeworkModel({
      school: req.body.school,
      class: req.body.class,
      section: req.body.section,
      subjectGroup: req.body.subjectGroup,
      subject: req.body.subject,
      homeworkDate: req.body.homeworkDate,
      submitDate: req.body.submitDate,
      maxMark: req.body.maxMark,
      attachedFiles: req.body.attachedFiles,
      description: req.body.description,
      attachDocument: `http://localhost:5000/home-work/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteHomework = async (req, res) => {
  try {
    if (!(await HomeworkModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await HomeworkModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateHomework = async (req, res) => {
  try {
    const visitorBook = await HomeworkModel.findByIdAndUpdate(
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

const getAllHomework = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await HomeworkModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await HomeworkModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await HomeworkModel.countDocuments(
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

export { createHomework, deleteHomework, UpdateHomework, getAllHomework };
