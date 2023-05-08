import GenerateStaffIDCardModel from "../../models/certificate/GenerateStaffIDCard.js";

const createGenerateStaffIDCard = async (req, res) => {
  try {
    const result = new GenerateStaffIDCardModel({
      school: req.body.school,
      staff: req.body.staff,
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

const deleteGenerateStaffIDCard = async (req, res) => {
  try {
    if (!(await GenerateStaffIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GenerateStaffIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGenerateStaffIDCard = async (req, res) => {
  try {
    const visitorBook = await GenerateStaffIDCardModel.findByIdAndUpdate(
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

const getAllGenerateStaffIDCard = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await GenerateStaffIDCardModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await GenerateStaffIDCardModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await GenerateStaffIDCardModel.countDocuments(
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
  createGenerateStaffIDCard,
  deleteGenerateStaffIDCard,
  UpdateGenerateStaffIDCard,
  getAllGenerateStaffIDCard,
};
