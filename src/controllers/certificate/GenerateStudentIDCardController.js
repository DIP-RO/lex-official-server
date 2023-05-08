import GenerateStudentIDCardModel from "../../models/certificate/GenerateStudentIDCard.js";

const createGenerateStudentIDCard = async (req, res) => {
  try {
    const result = new GenerateStudentIDCardModel({
      school: req.body.school,
      student: req.body.student,
      idCard: req.body.idCard,
      expireDate: req.body.expireDate,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteGenerateStudentIDCard = async (req, res) => {
  try {
    if (!(await GenerateStudentIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GenerateStudentIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGenerateStudentIDCard = async (req, res) => {
  try {
    const visitorBook = await GenerateStudentIDCardModel.findByIdAndUpdate(
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

const getAllGenerateStudentIDCard = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await GenerateStudentIDCardModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await GenerateStudentIDCardModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await GenerateStudentIDCardModel.countDocuments(
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
  createGenerateStudentIDCard,
  deleteGenerateStudentIDCard,
  UpdateGenerateStudentIDCard,
  getAllGenerateStudentIDCard,
};
