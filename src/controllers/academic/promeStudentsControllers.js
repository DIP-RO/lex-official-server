import PromoteStudentModel from "../../models/academic/promeStudents.js";

const createPromoteStudent = async (req, res) => {
  try {
    const result = new PromoteStudentModel({
      school: req.body.school,
      student: req.body.student,
      class: req.body.class,
      sections: req.body.sections,
      promoteInSession: req.body.promoteInSession,
      newClass: req.body.newClass,
      newSection: req.body.newSection,
      currentResult: req.body.currentResult,
      nextSessionStatus: req.body.nextSessionStatus,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePromoteStudent = async (req, res) => {
  try {
    if (!(await PromoteStudentModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PromoteStudentModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePromoteStudent = async (req, res) => {
  try {
    const visitorBook = await PromoteStudentModel.findByIdAndUpdate(
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

const getAllPromoteStudent = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PromoteStudentModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PromoteStudentModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PromoteStudentModel.countDocuments(
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
  createPromoteStudent,
  deletePromoteStudent,
  UpdatePromoteStudent,
  getAllPromoteStudent,
};
